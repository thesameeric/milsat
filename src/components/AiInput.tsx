import * as React from "react"
import { cn } from "@/lib/utils"
import EnterButton from './EnterButton';

interface AiInputProps extends Omit<React.ComponentProps<"textarea">, "onSubmit"> {
    onSubmit?: (data: string) => void;
    isStreaming?: boolean;
    onCancelStream?: () => void;
}

export interface AiInputRef {
    clear: () => void;
    focus: () => void;
    setValue: (value: string) => void;
}

const AiInput = React.forwardRef<AiInputRef, AiInputProps>(
    ({ className, onSubmit, isStreaming = false, onCancelStream, ...props }, ref) => {
        const textareaRef = React.useRef<HTMLTextAreaElement>(null);
        const containerRef = React.useRef<HTMLDivElement>(null);
        const [hasContent, setHasContent] = React.useState(false);

        const MIN_HEIGHT = 96;
        const MAX_HEIGHT = 500;

        React.useImperativeHandle(ref, () => ({
            clear: () => {
                if (textareaRef.current && containerRef.current) {
                    textareaRef.current.value = '';
                    setHasContent(false);
                    // Reset both textarea and container heights
                    textareaRef.current.style.height = `${MIN_HEIGHT}px`;
                    containerRef.current.style.height = `${MIN_HEIGHT}px`;
                }
            },
            focus: () => {
                textareaRef.current?.focus();
            },
            setValue: (value: string) => {
                if (textareaRef.current && containerRef.current) {
                    textareaRef.current.value = value;
                    setHasContent(value.trim().length > 0);
                    
                    // Trigger resize to adjust height
                    const target = textareaRef.current;
                    target.style.height = `${MIN_HEIGHT}px`;
                    const scrollHeight = target.scrollHeight;
                    const newHeight = Math.min(Math.max(scrollHeight, MIN_HEIGHT), MAX_HEIGHT);
                    target.style.height = `${newHeight}px`;
                    containerRef.current.style.height = `${newHeight}px`;
                    
                    // Handle overflow
                    if (scrollHeight > MAX_HEIGHT) {
                        target.style.overflowY = 'auto';
                    } else {
                        target.style.overflowY = 'hidden';
                    }
                    
                    // Focus the textarea
                    target.focus();
                }
            }
        }));

        const handleSubmit = () => {
            if (textareaRef.current && hasContent) {
                const value = textareaRef.current.value.trim();
                if (value) {
                    onSubmit?.(value);
                }
            }
        };

        const handleCancel = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            onCancelStream?.();
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
            }
            props.onKeyDown?.(e);
        };

        const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
            const target = e.target as HTMLTextAreaElement;
            const container = containerRef.current;

            if (!container) return;

            // Update button state based on content
            const hasText = target.value.trim().length > 0;
            setHasContent(hasText);

            // Reset height to calculate new scrollHeight
            target.style.height = `${MIN_HEIGHT}px`;

            // Calculate required height
            const scrollHeight = target.scrollHeight;
            const newHeight = Math.min(Math.max(scrollHeight, MIN_HEIGHT), MAX_HEIGHT);

            // Apply height to both textarea and container
            target.style.height = `${newHeight}px`;
            container.style.height = `${newHeight}px`;

            // Handle overflow
            if (scrollHeight > MAX_HEIGHT) {
                target.style.overflowY = 'auto';
            } else {
                target.style.overflowY = 'hidden';
            }

            props.onInput?.(e);
        };

        return (
            <div
                ref={containerRef}
                className={cn(
                    // Base container styles
                    "relative rounded-3xl border border-[#ffffff1a] bg-[#171717] shadow-xs w-full lg:w-[600px]",
                    "transition-[color,box-shadow,height] duration-200 ease-in-out",
                    // Text and selection styles
                    "text-[14px] md:text-sm placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
                    // Focus styles
                    "focus-within:border-none focus-within:ring-none focus-within:ring-[0px]",
                    // Invalid state
                    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
                    // Disabled state
                    "has-[:disabled]:pointer-events-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
                    // Dark mode
                    "dark:bg-card",
                    // Critical: Ensure proper overflow containment
                    "overflow-hidden",
                    className
                )}
                style={{
                    height: `${MIN_HEIGHT}px`,
                    minHeight: `${MIN_HEIGHT}px`,
                    maxHeight: `${MAX_HEIGHT}px`,
                }}
            >
                <textarea
                    ref={textareaRef}
                    className={cn(
                        // Layout
                        "w-full h-full resize-none border-none bg-transparent outline-none",
                        // Padding (accounting for button space)
                        "p-5 pr-12",
                        // Typography
                        "text-base placeholder:text-muted-foreground leading-relaxed",
                        // Focus states
                        "focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-none",
                        // Critical: Proper overflow handling
                        "overflow-y-hidden"
                    )}
                    style={{
                        height: `${MIN_HEIGHT}px`,
                        minHeight: `${MIN_HEIGHT}px`,
                        maxHeight: `${MAX_HEIGHT}px`,
                        // Ensure proper line height and text rendering
                        lineHeight: '1.5',
                        // Remove default textarea styling
                        resize: 'none',
                        // Ensure text doesn't overflow container
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                    }}
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    {...props}
                />
                {isStreaming ? (
                    // Cancel button when streaming
                    <button
                        className="absolute bottom-3 right-3 z-10 bg-red-500/10 hover:bg-red-500/20 text-red-600 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer border border-red-200 hover:border-red-300"
                        onClick={handleCancel}
                        type="button"
                        title="Cancel streaming"
                    >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Cancel
                    </button>
                ) : (
                    // Submit button when not streaming
                    <div
                        className={cn(
                            "absolute bottom-3 right-3 z-10 flex items-center justify-center transition-all duration-200",
                            hasContent
                                ? "cursor-pointer opacity-100"
                                : "cursor-not-allowed opacity-50"
                        )}
                        onClick={handleSubmit}
                    >
                        <div className={cn(
                            "transition-colors duration-200",
                            hasContent
                                ? "text-primary hover:text-primary/80"
                                : "text-muted-foreground"
                        )}>
                            <EnterButton />
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

AiInput.displayName = "AiInput";
export { AiInput };