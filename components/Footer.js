import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#05060b] border-t border-white/5 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/assets/uploaded_image_0_1766144146154.png"
                                    alt="Codesstellar Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold font-outfit tracking-wide">CODESSTELLAR</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Empowering businesses with cutting-edge technology solutions in AI, Blockchain, and Mobile Development.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Mobile App Development</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Blockchain Solutions</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">AI & Machine Learning</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Game Development</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Codesstellar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
