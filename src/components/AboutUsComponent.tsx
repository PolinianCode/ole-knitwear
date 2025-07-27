import Image from "next/image";

export default function AboutUsComponent() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">

                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/aboutus.jpg"
                        alt="about us"
                        width={500}
                        height={500}
                        className="rounded"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 tracking-wide">OUR STORY</h2>
                    <p className="text-gray-700 mb-4 leading-loose ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium tempore. Voluptatibus, vero maiores sed, facilis omnis praesentium, quasi est minus earum aliquam eligendi provident repellendus quae porro quibusdam sit?
                    </p>
                    <p className="text-gray-700 mb-4 leading-loose ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae modi fugit nulla iusto provident, voluptatibus molestiae ad quae ducimus illo dignissimos explicabo repellendus assumenda minima maxime consequatur obcaecati ab id.
                    </p>
                    <p className="text-gray-700 leading-loose ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dignissimos commodi, inventore ad sed similique dolores vero animi, distinctio libero doloremque! Incidunt ut at illum blanditiis alias saepe obcaecati ex!
                    </p>
                </div>
            </div>
        </div>
    );
}
