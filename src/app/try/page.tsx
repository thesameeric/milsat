'use client';

import Image from "next/image";
import { FormEventHandler, useRef, useState } from "react";
import { AiInput, AiInputRef } from "@/components/AiInput";

const models = [
    { id: 'gpt-4o', name: 'GPT-4o' },
    { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
];

export default function Try() {
    const [text, setText] = useState<string>('');
    const [status, setStatus] = useState<
        'submitted' | 'streaming' | 'ready' | 'error'
    >('ready');

    const inputRef = useRef<AiInputRef>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (!text) {
            return;
        }
        setStatus('submitted');
        setTimeout(() => {
            setStatus('streaming');
        }, 200);
        setTimeout(() => {
            setStatus('ready');
            setText('');
        }, 2000);
    };


    return <div>
        <section className="container mx-auto">
            <div className="flex flex-col justify-center items-center py-40">
                <Image src={'/ai.gif'} alt={"ai gif"} width={100} height={100} />
                <div className="mt-10">
                    <AiInput
                        ref={inputRef}
                        onSubmit={() => { }}
                        className={'h-[130px] z-[90]'}
                        placeholder='Ask anything'
                        disabled={false}
                        isStreaming={false}
                        onCancelStream={() => { }}
                    />
                </div>
            </div>
            <div></div>
        </section>
    </div>;
}