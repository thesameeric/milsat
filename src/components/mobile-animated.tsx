'use client';

export default function MobileAnimated() {
    return (
        <div className="relative inline-block">
            <style jsx>{`
                @keyframes fillInput {
                    from { width: 0%; }
                    to { width: var(--fill-width); }
                }

                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }

                @keyframes buttonPress {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(2px); }
                }

                @keyframes successFade {
                    0% { opacity: 0; transform: scale(0.5); }
                    50% { opacity: 1; transform: scale(1.1); }
                    100% { opacity: 1; transform: scale(1); }
                }

                .field-1-fill {
                    --fill-width: 75%;
                    animation: fillInput 0.8s ease-out 0.5s forwards;
                    width: 0%;
                }

                .field-2-fill {
                    --fill-width: 65%;
                    animation: fillInput 0.8s ease-out 1.5s forwards;
                    width: 0%;
                }

                .field-3-fill {
                    --fill-width: 85%;
                    animation: fillInput 0.8s ease-out 2.5s forwards;
                    width: 0%;
                }

                .field-4-fill {
                    --fill-width: 70%;
                    animation: fillInput 0.8s ease-out 3.5s forwards;
                    width: 0%;
                }

                .cursor {
                    animation: blink 1s step-end infinite;
                }

                .cursor-1 { animation-delay: 0.5s; animation-duration: 0.8s; animation-fill-mode: forwards; }
                .cursor-2 { animation-delay: 1.5s; animation-duration: 0.8s; animation-fill-mode: forwards; }
                .cursor-3 { animation-delay: 2.5s; animation-duration: 0.8s; animation-fill-mode: forwards; }
                .cursor-4 { animation-delay: 3.5s; animation-duration: 0.8s; animation-fill-mode: forwards; }

                .submit-btn {
                    animation: buttonPress 0.3s ease-out 4.5s;
                }

                .success-check {
                    animation: successFade 0.5s ease-out 5s forwards;
                    opacity: 0;
                }

                svg:hover .field-1-fill,
                svg:hover .field-2-fill,
                svg:hover .field-3-fill,
                svg:hover .field-4-fill {
                    animation: fillInput 0.8s ease-out forwards;
                }

                svg:hover .field-1-fill { animation-delay: 0.5s; }
                svg:hover .field-2-fill { animation-delay: 1.5s; }
                svg:hover .field-3-fill { animation-delay: 2.5s; }
                svg:hover .field-4-fill { animation-delay: 3.5s; }

                svg:hover .submit-btn { animation: buttonPress 0.3s ease-out 4.5s; }
                svg:hover .success-check { animation: successFade 0.5s ease-out 5s forwards; }
            `}</style>

            <svg width="303" height="617" viewBox="0 0 303 617" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                {/* Phone frame */}
                <path d="M54.8416 1H248.158C266.88 1 273.669 2.94934 280.514 6.60979C287.358 10.2702 292.73 15.6418 296.39 22.4862C300.051 29.3307 302 36.1197 302 54.8416V562.158C302 580.88 300.051 587.669 296.39 594.514C292.73 601.358 287.358 606.73 280.514 610.39C273.669 614.051 266.88 616 248.158 616H54.8416C36.1197 616 29.3307 614.051 22.4862 610.39C15.6418 606.73 10.2702 601.358 6.60979 594.514C2.94934 587.669 1 580.88 1 562.158V54.8416C1 36.1197 2.94934 29.3307 6.60979 22.4862C10.2702 15.6418 15.6418 10.2702 22.4862 6.60979C29.3307 2.94934 36.1197 1 54.8416 1Z" fill="#1F2937" stroke="#374151" strokeWidth="0.5" />

                {/* Screen */}
                <rect x="15" y="60" width="273" height="490" rx="8" fill="#F9FAFB" />

                {/* App header */}
                <rect x="15" y="60" width="273" height="50" rx="8" fill="white" />
                <text x="151" y="90" textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="600" fontFamily="-apple-system, sans-serif">
                    Collected 201
                </text>

                {/* Form container */}
                <rect x="25" y="130" width="253" height="390" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />

                {/* Form Title */}
                <text x="40" y="160" fill="#0F172A" fontSize="18" fontWeight="700" fontFamily="-apple-system, sans-serif">
                    First Name
                </text>

                {/* Field 1 */}
                <rect x="35" y="175" width="233" height="40" rx="6" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                <rect x="45" y="190" height="10" fill="#0F172A" className="field-1-fill" />
                <rect x="45" y="190" width="2" height="10" fill="#0F172A" className="cursor cursor-1" />

                <text x="40" y="245" fill="#0F172A" fontSize="18" fontWeight="700" fontFamily="-apple-system, sans-serif">
                    Last Name
                </text>

                {/* Field 2 */}
                <rect x="35" y="260" width="233" height="40" rx="6" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                <rect x="45" y="275" height="10" fill="#0F172A" className="field-2-fill" />
                <rect x="45" y="275" width="2" height="10" fill="#0F172A" className="cursor cursor-2" />

                <text x="40" y="330" fill="#0F172A" fontSize="18" fontWeight="700" fontFamily="-apple-system, sans-serif">
                    Email
                </text>

                {/* Field 3 */}
                <rect x="35" y="345" width="233" height="40" rx="6" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                <rect x="45" y="360" height="10" fill="#0F172A" className="field-3-fill" />
                <rect x="45" y="360" width="2" height="10" fill="#0F172A" className="cursor cursor-3" />

                <text x="40" y="415" fill="#0F172A" fontSize="18" fontWeight="700" fontFamily="-apple-system, sans-serif">
                    Phone
                </text>

                {/* Field 4 */}
                <rect x="35" y="430" width="233" height="40" rx="6" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
                <rect x="45" y="445" height="10" fill="#0F172A" className="field-4-fill" />
                <rect x="45" y="445" width="2" height="10" fill="#0F172A" className="cursor cursor-4" />

                {/* Submit button */}
                <g className="submit-btn">
                    <rect x="35" y="485" width="233" height="45" rx="8" fill="#0F172A" />
                    <text x="151" y="512" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="-apple-system, sans-serif">
                        Save data
                    </text>
                </g>

                {/* Success indicator */}
                <g className="success-check">
                    <circle cx="151" cy="310" r="35" fill="#10B981" fillOpacity="0.15" />
                    <circle cx="151" cy="310" r="28" fill="#10B981" />
                    <path d="M138 310 L147 319 L164 302" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <text x="151" y="365" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="600" fontFamily="-apple-system, sans-serif">
                        Form Submitted!
                    </text>
                </g>

                {/* Bottom bar */}
                <rect x="15" y="550" width="273" height="20" fill="#1F2937" />
                <rect x="125" y="555" width="53" height="4" rx="2" fill="#4B5563" />
            </svg>
        </div>
    );
}
