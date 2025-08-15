import Link from "next/link";


export default function Footar(){
    return(
        <>

        <footer className="bg-gray-900 text-white pt-16 pb-6 rounded-t-lg">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
            {/* Column 1: Company Info */}
            <div>
              <h4 className="text-orange-500 font-bold mb-3">Al Bayan Foundation</h4>
              <p className="text-gray-400">Construction, Surveying & General Contracting.</p>
            </div>
        
            {/* Column 2: Products / Projects */}
            <div>
              <h4 className="text-orange-500 font-bold mb-3">Products</h4>
              <ul className="space-y-2">
                <li><Link href='products'  className="hover:text-orange-400 transition"> Project One</Link> </li>
                  <li><Link href='products'  className="hover:text-orange-400 transition"> Project Two</Link> </li>
                    <li><Link href='products'  className="hover:text-orange-400 transition"> Project Three</Link> </li>
                      <li><Link href='products'  className="hover:text-orange-400 transition"> Project Four</Link> </li>
                        <li><Link href='products'  className="hover:text-orange-400 transition"> Project Five</Link> </li>
                
               
              </ul>
            </div>
        
            {/* Column 3: Email then Phone */}
            <div>
              <h4 className="text-orange-500 font-bold mb-3">Email</h4>
              <p>📧 Tasheed@albayaninte.com</p>
              <div className="mt-4">
                <h4 className="text-orange-500 font-bold mb-2">Phone</h4>
                <ul className="space-y-1">
                  <li>📞 0558826509</li>
                  <li>📞 0506489999</li>
                  <li>📞 0595663615</li> 
                </ul>
              </div>
            </div>
        
            {/* Column 4: Info Navigation */}
            <div>
              <h4 className="text-orange-500 font-bold mb-3">Information</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
                <li><Link href="/products" className="hover:text-orange-400 transition">Project</Link></li>
                <li><Link href="/abuot" className="hover:text-orange-400 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
              </ul>
            </div>
          </div>
        
          {/* Bottom Row */}
          <div className="mt-10 text-center text-gray-400 text-sm">
            © 2025 Mohammed Alnour — Frontend Developer. All rights reserved.
          </div>
        </footer>
        
        </>
    )
}