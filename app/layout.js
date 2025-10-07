import Navigation from "./components/Navigation";
import "./globals.css";
import { cookies } from "next/headers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "NextJS Task",
  description: "Authentication Task FrontEnd ",
};

export default function RootLayout({ children }) {
  const token = cookies().get("token")?.value;

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-800 font-poppins">
        <Navigation token={token} />

        <main className=" w-full">{children}</main>

        <footer className="bg-[#443d33] text-[#FFFFFFB2] py-10 px-6 mt-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
            <div>
              <img
                src="./tinytales-logo-white.png"
                className="h-[51px] w-[66px]"
              />
              <p className=" text-[#FFFFFFB2] text-sm font-medium">
                Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae
                Ipsam in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
                quconsequatur ab cum maxime.Soluta dolor quae
              </p>
            </div>

            <div className="info">
              <h3 className=" mb-3 font-semibold text-[#FFFFFF] text-[24px]">
                Let Us Help
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    All Products
                  </a>
                </li>
              </ul>
            </div>

            <div className="policies">
              <h3 className=" mb-3 font-semibold text-[#FFFFFF] text-[24px]">
                Policies
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#BE968E] text-[#FFFFFFB2] text-[16px] font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center gap-6">
              <h3 className=" mb-3 font-semibold text-[#FFFFFF] text-[24px]">
                Send Email
              </h3>
              <div className=" flex items-start justify-center flex-col xl:w-[369px] lg:w-[255px]  ">
                <form className="flex items-center bg-white rounded-lg  overflow-hidden">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-4  py-3 w-full font-normal text-sm text-[#8A8A8A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#BE968E] text-white px-6 py-[6px] mr-1 text-[16px] rounded-[12px] font-medium hover:bg-[#a67c6b] hover:cursor-pointer transition"
                  >
                    Send
                  </button>
                </form>
              </div>

              <div className=" socialmedia flex flex-col items-start justify-center gap-3 ">
                <h2 className="font-semibold text-base text-white ">
                  Follow Us
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <a href="#" target="_blank" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f text-lg w-6 h-6 text-white  hover:scale-150 transition-transform ease-in-out duration-500 cursor-pointer "></i>
                  </a>

                  <a href="#" target="_blank" aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter text-lg w-6 h-6 text-white  hover:scale-150 transition-transform ease-in-out duration-500 cursor-pointer"></i>
                  </a>

                  <a href="#" target="_blank" aria-label="Instagram">
                    <i className="fa-brands fa-instagram text-lg w-6 h-6 text-white  hover:scale-150 transition-transform ease-in-out duration-500 cursor-pointer"></i>
                  </a>
                  <a href="#" target="_blank" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin text-lg w-6 h-6 text-white  hover:scale-150 transition-transform ease-in-out duration-500 cursor-pointer"></i>
                  </a>
                  <a href="#" target="_blank" aria-label="Whatsapp">
                    <i className="fa-brands fa-whatsapp text-lg w-6 h-6 text-white  hover:scale-150 transition-transform ease-in-out duration-500 cursor-pointer"></i>
                  </a>
                  <a href="#" target="_blank" aria-label="Telegram">
                    <i className="fa-brands fa-telegram text-lg w-6 h-6 text-white  hover:scale-150 transition-transform ease-in-out duration-500 cursor-pointer"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
