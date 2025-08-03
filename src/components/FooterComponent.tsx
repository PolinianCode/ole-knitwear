import Image from 'next/image';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    const paymentIcons = [
        'visa.png',
        'card.png',
        'paypal.png',
        'google-pay.png',
        'apple-pay.png',
        'maestro.png',
    ];

    return (
        <footer className="bg-brand text-white text-sm">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                {/* Contact */}
                <div className="space-y-4">
                    <h3 className="uppercase font-raleway font-semibold">Contact</h3>
                    <p>
                        <a href="mailto:lekoval@gmail.com" className="hover:underline">lekoval@gmail.com</a><br />
                        <a href="tel:+380631099202" className="hover:underline">+380 63 109 9202</a>
                    </p>
                    <div className="space-y-1">
                        <a href="#" className="hover:underline block">Terms and Conditions</a>
                        <a href="#" className="hover:underline block">Privacy Policy</a>
                    </div>
                </div>

                {/* Desc */}
                <div className="space-y-4">
                    <h3 className="font-raleway font-semibold text-lg">Ole Knitwear</h3>
                    <p className="max-w-md mx-auto md:mx-0">
                        Where luxury meets craftsmanship through ethical handmade knitwear. We collaborate with senior artisans to create modern heirlooms.
                    </p>
                    <p className="text-xs">© 2025 Ole Knitwear</p>
                </div>

                {/* Socials */}
                <div className="space-y-4 text-center md:text-right">
                    <h3 className="uppercase font-raleway font-semibold">Follow Us</h3>
                    <div className="flex justify-center md:justify-end">
                        <a href="https://www.instagram.com/ole.knitwear/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                        Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/** Payment methods */}
            <div className=" pt-6 pb-10">
                    <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-6">
                        {paymentIcons.map((icon, index) => (
                            <Image
                                key={index}
                                src={`/images/payments/${icon}`}
                                alt={icon.replace('.png', '')}
                                width={50}
                                height={30}
                                className="object-contain"
                            />
                        ))}
                    </div>
            </div>
        </footer>
    );
}
