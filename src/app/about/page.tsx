import Image from "next/image";
import { NewsItem } from '../../components/News';

export default function AboutPage() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-6">
            <section className="mt-40">
                <h1 className="font-bold text-4xl md:text-7xl">By Africans,<br></br> For Africa</h1>
                <span className="md:w-7/12 inline-block mt-10">
                    <p>
                        The world has spent decades trying to understand Africa from the outside looking in. Satellite images from space. Reports written in distant offices. Data collected by people who&apos;ve never walked our streets or spoken our languages.
                    </p>
                </span>
            </section>
            <section className="flex items-center mt-40 w-full">
                <div className="hidden md:flex w-6/12">
                    <Image width={679} height={900} src={"/about.png"} alt={""}></Image>
                </div>
                <div className="md:w-6/12">
                    <div>
                        <h2 className="text-5xl">We flipped the script</h2>
                        <span className="flex pt-10">
                            <p>
                                Milsat is intelligence gathered by Africans who know their neighborhoods, powered by technology that respects our realities, and delivered to those ready to see the continent as it truly is—not as it&apos;s been imagined.
                                This is Africa, mapped by Africa.
                            </p>
                        </span>
                    </div>
                    <div className="mt-40">
                        <h3 className="text-5xl leading-14">
                            We knew Africa deserved better. More importantly, we knew Africans could deliver it.
                        </h3>
                    </div>
                </div>
            </section>
            <NewsItem />
        </div>
    );
}