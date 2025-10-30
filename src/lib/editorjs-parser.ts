/**
 * EditorJS block types and data structures
 */
export interface EditorJSBlock {
  id?: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export interface EditorJSData {
  time?: number;
  blocks: EditorJSBlock[];
  version?: string;
}

/**
 * Parse EditorJS paragraph block
 */
function parseParagraph(block: EditorJSBlock): string {
  return `<p>${block.data.text || ''}</p>`;
}

/**
 * Generate anchor ID from text
 */
function generateAnchorId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Parse EditorJS header block
 */
function parseHeader(block: EditorJSBlock): string {
  const level = block.data.level || 2;
  const text = block.data.text || '';
  const id = generateAnchorId(text);
  return `<h${level} id="${id}">${text}</h${level}>`;
}

/**
 * Parse EditorJS list block
 */
function parseList(block: EditorJSBlock): string {
  const items = block.data.items || [];
  const style = block.data.style || 'unordered';
  const tag = style === 'ordered' ? 'ol' : 'ul';

  const listItems = items.map((item: string) => `<li>${item}</li>`).join('');
  return `<${tag}>${listItems}</${tag}>`;
}

/**
 * Parse EditorJS quote block
 */
function parseQuote(block: EditorJSBlock): string {
  const text = block.data.text || '';
  const caption = block.data.caption || '';

  return `<blockquote>
    <p>${text}</p>
    ${caption ? `<cite>${caption}</cite>` : ''}
  </blockquote>`;
}

/**
 * Parse EditorJS code block
 */
function parseCode(block: EditorJSBlock): string {
  const code = block.data.code || '';
  return `<pre><code>${code}</code></pre>`;
}

/**
 * Parse EditorJS delimiter block
 */
function parseDelimiter(): string {
  return '<hr />';
}

/**
 * Parse EditorJS image block
 */
function parseImage(block: EditorJSBlock): string {
  const url = block.data.file?.url || '';
  const caption = block.data.caption || '';
  const withBorder = block.data.withBorder || false;
  const stretched = block.data.stretched || false;
  const withBackground = block.data.withBackground || false;

  let className = '';
  if (withBorder) className += 'image-border ';
  if (stretched) className += 'image-stretched ';
  if (withBackground) className += 'image-background ';

  return `<figure${className ? ` class="${className.trim()}"` : ''}>
    <img src="${url}" alt="${caption}" />
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
  </figure>`;
}

/**
 * Parse EditorJS table block
 */
function parseTable(block: EditorJSBlock): string {
  const content = block.data.content || [];
  const withHeadings = block.data.withHeadings || false;

  if (content.length === 0) return '';

  let html = '<table>';

  content.forEach((row: string[], index: number) => {
    const tag = withHeadings && index === 0 ? 'th' : 'td';
    const rowHtml = row.map(cell => `<${tag}>${cell}</${tag}>`).join('');
    html += `<tr>${rowHtml}</tr>`;
  });

  html += '</table>';
  return html;
}

/**
 * Main parser function
 */
export function parseEditorJS(data: EditorJSData): string {
  if (!data || !data.blocks || !Array.isArray(data.blocks)) {
    return '';
  }

  return data.blocks.map(block => {
    switch (block.type) {
      case 'paragraph':
        return parseParagraph(block);
      case 'header':
        return parseHeader(block);
      case 'list':
        return parseList(block);
      case 'quote':
        return parseQuote(block);
      case 'code':
        return parseCode(block);
      case 'delimiter':
        return parseDelimiter();
      case 'image':
        return parseImage(block);
      case 'table':
        return parseTable(block);
      default:
        console.warn(`Unknown block type: ${block.type}`);
        return '';
    }
  }).join('\n');
}

/**
 * Parse EditorJS to React components (returns array of objects)
 */
export function parseEditorJSToReact(data: EditorJSData) {
  if (!data || !data.blocks || !Array.isArray(data.blocks)) {
    return [];
  }

  return data.blocks.map((block, index) => ({
    id: block.id || `block-${index}`,
    type: block.type,
    data: block.data,
  }));
}

/**
 * Extract plain text from EditorJS data
 */
export function extractPlainText(data: EditorJSData): string {
  if (!data || !data.blocks || !Array.isArray(data.blocks)) {
    return '';
  }

  return data.blocks.map(block => {
    switch (block.type) {
      case 'paragraph':
      case 'header':
        return block.data.text || '';
      case 'list':
        return (block.data.items || []).join(' ');
      case 'quote':
        return block.data.text || '';
      case 'code':
        return block.data.code || '';
      default:
        return '';
    }
  }).filter(Boolean).join(' ');
}

/**
 * Header item for table of contents
 */
export interface HeaderItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract headers from EditorJS data for table of contents
 */
export function extractHeaders(data: EditorJSData): HeaderItem[] {
  if (!data || !data.blocks || !Array.isArray(data.blocks)) {
    return [];
  }

  return data.blocks
    .filter(block => block.type === 'header')
    .map(block => ({
      id: generateAnchorId(block.data.text || ''),
      text: block.data.text || '',
      level: block.data.level || 2,
    }));
}
