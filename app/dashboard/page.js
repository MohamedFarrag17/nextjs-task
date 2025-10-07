"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");

    if (!token) {
      router.replace("/login");
    } else {
      setUserName(name);
    }
  }, [router]);

  const ratings = [
    { stars: 5, percent: 67 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 9 },
  ];

  const reviews = [
    {
      name: "Alex Daevrn",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      name: "Alex Daevrn",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      name: "Alex Daevrn",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
  ];

  const products = [
    {
      id: 1,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
      price: 900,
      rating: 4.5,
      reviews: 2910,
      discount: "25% OFF",
      image: "/dressBlack.png",
    },
    {
      id: 2,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
      price: 900,
      rating: 4.5,
      reviews: 2910,
      discount: "25% OFF",
      image: "/dressWhite.png",
    },
    {
      id: 3,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
      price: 900,
      rating: 4.5,
      reviews: 2910,
      discount: "25% OFF",
      image: "dressBrown.png",
    },
    {
      id: 4,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
      price: 900,
      rating: 4.5,
      reviews: 2910,
      discount: "25% OFF",
      image: "/dressGrey.png",
      colors: ["yellow", "red", "black"],
    },
  ];

  return (
    <div className="min-h-screen bg-white  w-full ">
      <div className="flex items-center justify-center  w-full h-[284px] bg-[#F5F5F5] text-[#020202] font-semibold text-[32px] ">
        Welcome, {userName}
      </div>

      <div className="bg-white w-5/6 mx-auto mt-4  flex flex-col items-center justify-center">
        <nav className="text-sm bg-[#ECECEC66] rounded-[16px] text-[#020202] font-medium p-4 mb-2 w-full h-[56px]">
          <ol className="flex items-center gap-[5px] w-[335px] h-[24px]">
            <li>
              <a
                href="/"
                className="hover:text-[#BE968E] transition text-base font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <span className="text-[#020202] font-medium">›</span>
            </li>
            <li>
              <a
                href="/category"
                className="hover:text-[#BE968E] transition text-base font-medium"
              >
                Our Category
              </a>
            </li>
            <li>
              <span className="text-[#020202] text-base font-medium">›</span>
            </li>
            <li className="text-[#8A8A8A] md:text-base text-sm font-medium ">
              Product Details
            </li>
          </ol>
        </nav>

        <section className="relative w-full flex lg:flex-row flex-col 2xl:gap-10 gap-3 lg:justify-between justify-center items-center ">
          <div className=" flex flex-col w-full">
            <div className="flex flex-col justify-center lg:items-start items-center gap-1">
              <div className="relative flex items-center justify-center bg-[#F5F5F5] rounded-3xl md:w-[524px] md:h-[565px] w-[353px] h-[381px] ">
                <div className="absolute top-5 w-full h-1 px-4 grid grid-cols-4 gap-1 ">
                  <div className=" rounded-2xl bg-[#D4D4D4]"></div>

                  <div className=" rounded-2xl bg-white"></div>
                  <div className=" rounded-2xl bg-[#D4D4D4]"></div>
                  <div className=" rounded-2xl bg-[#D4D4D4]"></div>
                </div>

                <img
                  src="/manBlue.png"
                  alt="displayed T-Shirt"
                  className="absolute bottom-0 md:h-[514px] md:w-[305px] w-[206px] h-[346px] object-cover block "
                />

                <div className=" flex items-center justify-center gap-3 p-4 ">
                  <button className=" absolute left-4 bg-[#C4C4C4] text-white   md:w-12 md:h-12 w-8 h-8  rounded-full  opacity-95 hover:opacity-100 hover:cursor-pointer ">
                    &lt;
                  </button>

                  <button className=" absolute right-4 bg-[#BE968E] text-white   md:w-12 md:h-12 w-8 h-8  rounded-full  opacity-95 hover:opacity-100 hover:cursor-pointer ">
                    &gt;
                  </button>
                </div>
              </div>

              <div className="relative flex items-center justify-center w-[523px] h-[183px] gap-1">
                <div className="flex items-center justify-center rounded-3xl max-w-md bg-[#F5F5F5] md:w-[169px] md:h-[183px] w-[114px] h-[123px]">
                  <img
                    src="/shirtWhite.png"
                    alt="displayed T-Shirt"
                    className=" md:w-[142px] md:h-[142px] w-[96px] h-[96px] "
                  />
                </div>

                <div className="flex items-center justify-center rounded-3xl max-w-md bg-[#F5F5F5] md:w-[169px] md:h-[183px] w-[114px] h-[123px]">
                  <img
                    src="/shirtRed.png"
                    alt="displayed T-Shirt"
                    className=" md:w-[142px] md:h-[142px] w-[96px] h-[96px] "
                  />
                </div>

                <div className="flex items-center justify-center rounded-3xl max-w-md bg-[#F5F5F5] md:w-[169px] md:h-[183px] w-[114px] h-[123px]">
                  <img
                    src="/shirtRed.png"
                    alt="displayed T-Shirt"
                    className=" md:w-[142px] md:h-[142px] w-[96px] h-[96px] "
                  />
                </div>

                <div className="absolute md:bottom-0 md:right-1  right-[87px] flex items-center justify-center rounded-3xl max-w-md bg-[#020202B2] bg-opacity-70 z-10 md:w-[169px] md:h-[183px] w-[114px] h-[123px]">
                  <p className="font-semibold text-[32px] text-white">+2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between">
              <p className=" w-[74px] h-[30px] font-semibold text-[14px]  text-[#BE968E] border-[#BE968E] border-[0.5px] rounded-[32px] py-2  px-4 flex items-center justify-center text-nowrap  ">
                T-Shirt
              </p>
              <div className=" flex items-center justify-center gap-3">
                <div className="border-[1px] rounded-[8px] border-[#4040401A] p-[6px]">
                  <img
                    src="bag.png"
                    alt="favorite"
                    className="w-6 h-6 text-white"
                  />
                </div>
                <div className="border-[1px] rounded-[8px] border-[#4040401A] p-[6px]">
                  <img
                    src="heart.png"
                    alt="favorite"
                    className="w-6 h-6 text-white "
                  />
                </div>
              </div>
            </div>
            <h2 className="xl:text-2xl text-base font-medium text-[#020202]">
              J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
            </h2>

            <div className="flex flex-col gap-[1px] w-[193px] h-[49px]">
              <div className="flex items-center h-[30px] w-full gap-2">
                <span className="text-xl font-medium text-[#020202]">
                  $300.00
                </span>
                <span className="text-base font-normal line-through text-[#8A8A8A]">
                  $360.00
                </span>
              </div>
              <p className="text-xs font-normal text-[#333333]">
                This price is exclusive of taxes.
              </p>
            </div>

            <p className="text-sm font-normal text-[#020202]">
              Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet, diam nonummy
            </p>
            <div className="flex flex-col gap-5">
              <div className="relative inline-block w-[299px] h-[45px]">
                <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#020202]">
                  Size
                </label>

                <select className="w-full appearance-none border bg-white border-gray-300 rounded-lg px-4 py-3  ">
                  <option>2XL</option>
                  <option>XL</option>
                  <option>L</option>
                </select>

                <svg
                  className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="relative inline-block w-[299px] h-[45px]">
                <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#020202]">
                  Type
                </label>

                <select className="w-full appearance-none border bg-white border-gray-300 rounded-lg px-4 py-3  ">
                  <option>Cotton</option>
                  <option>Wool</option>
                  <option>Silk</option>
                </select>

                <svg
                  className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label className="block  font-medium text-xl text-[#020202]">
                Colors
              </label>
              <div className="flex gap-4">
                <button className="flex items-center justify-center xl:w-[60px] xl:h-[60px] w-[44px] h-[44px]  rounded-[50px] bg-[#F4F7F9] ">
                  <p className="w-8 h-8 rounded-[57px] bg-[#D90202]"></p>
                </button>
                <button className="flex items-center justify-center xl:w-[60px] xl:h-[60px] w-[44px] h-[44px] rounded-[50px] bg-[#F4F7F9] border-[1.5px] border-[#020202] ">
                  <p className="w-8 h-8 rounded-[57px] bg-[#B8CCDA]"></p>
                </button>
                <button className="flex items-center justify-center xl:w-[60px] xl:h-[60px] w-[44px] h-[44px] rounded-[50px] bg-[#F4F7F9] ">
                  <p className="w-8 h-8 rounded-[57px] bg-[#988755]"></p>
                </button>
                <button className="flex items-center justify-center xl:w-[60px] xl:h-[60px] w-[44px] h-[44px] rounded-[50px] bg-[#F4F7F9] ">
                  <p className="w-8 h-8 rounded-[57px] bg-[#7198C8]"></p>
                </button>
                <button className="flex items-center justify-center xl:w-[60px] xl:h-[60px] w-[44px] h-[44px] rounded-[50px] bg-[#F4F7F9] ">
                  <p className="w-8 h-8 rounded-[57px] bg-[#5D5D5B]"></p>
                </button>
              </div>
            </div>

            <div className="flex xl:flex-row flex-col xl:justify-between justify-center xl:gap-20 gap-3">
              <div className="flex flex-col gap-2 w-[304px] h-[102px]">
                <div className="flex items-center gap-2 ">
                  <h2 className="text-xl font-medium text-[#020202]">
                    Quantity
                  </h2>
                  <p className="text-[#8A8A8A] text-base font-normal">
                    ($300.00 for Piece)
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-[#F5F5F5] flex items-center justify-between rounded-xl h-14 w-[184px] py-4 px-2 ">
                    <button className="bg-white w-10 h-10 rounded-xl text-[28px] font-medium">
                      -
                    </button>
                    <p>01</p>
                    <button className="bg-white w-10 h-10 rounded-xl text-[28px] font-medium">
                      +
                    </button>
                  </div>
                  <p className="text-2xl font-medium">$300.00</p>
                </div>
              </div>

              <button className="mt-8 flex items-center justify-center gap-2 bg-[#BE968E] text-white px-8 py-4 rounded-xl 2xl:w-[234px] lg:w-[150px] w-[353px] h-14">
                <p className="text-[16px]  font-medium text-nowrap">
                  Add To Cart
                </p>{" "}
                <img
                  src="bagTwo.png"
                  alt="addtocart"
                  className="w-6 h-6 text-white"
                />
              </button>
            </div>
          </div>
          <img
            src="./tinytales-logo-transparent.png"
            className="absolute md:block hidden left-1 top-[752px] h-[57px] w-[98px] "
          />
        </section>
        <section className="relative rating flex flex-col justify-between gap-12 w-full mt-32">
          <div className="flex flex-col items-start gap-[2px]">
            <h1 className="text-2xl font-semibold text-[#020202]">
              Rating & Reviews
            </h1>
            <span className="bg-[#BE968E] absolute left-0 top-7 w-10 h-1 rounded-[16px] "></span>
          </div>

          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div className="flex  relative">
              <p className="text-[120px] font-medium">4,5</p>{" "}
              <p className="absolute bottom-10 left-44 text-[#B0B0B0] font-medium text-2xl">
                /5
              </p>{" "}
            </div>
            <div className="space-y-4 max-w-md md:w-[484px] md:h-[182px] w-[356px] h-[182px]">
              {ratings.map(({ stars, percent }) => (
                <div key={stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-[80px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#BE968E"
                      className="w-6 h-6"
                    >
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                    </svg>
                    <span className="text-xl font-medium  text-[#545454]">
                      {stars}{" "}
                    </span>
                  </div>

                  <div className="flex-1 w-[363px] h-[6px] bg-gray-200 rounded-xl overflow-hidden">
                    <div
                      className="bg-[#BE968E] h-full transition-all duration-700 ease-in-out"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>

                  <div className="text-xl font-medium text-[#545454] w-[40px] h-[30px] text-right">
                    %{percent}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:flex flex-col justify-between items-center gap-[14px] h-[182px] hidden">
              <h2 className="text-base font-normal text-[#545454]">
                Total Reviews
              </h2>
              <p className="font-semibold text-6xl">3.0K</p>
              <button className="flex items-center justify-center gap-2 bg-[#BE968E] w-[186px] h-[56px] rounded-[12px] py-4 px-8 text-white">
                <p className="text-base font-medium md:text-nowrap">
                  Add Comment
                </p>
                <div
                  className="w-5 h-[18px] text-white flex items-center justify-center relative"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.4)",

                    borderRadius: "50% 50% 50% 25% / 50% 50% 50% 25%",
                  }}
                >
                  <div className="flex gap-1 w-16 p-1">
                    <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
                    <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
                    <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>

        <section className=" relative flex flex-col gap-8 items-center justify-center mt-28 w-full md:h-[582px] h-[526px] py-10  ">
          {reviews.map((review, index) => (
            <div key={index} className="border-b pb-6 w-full  ">
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center">
                    {" "}
                    <div className="flex items-center gap-4">
                      <h4 className="font-semibold md:text-xl text-sm text-black">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1 my-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            style={{
                              fill:
                                i < review.rating
                                  ? "#BE968E"
                                  : "rgba(190, 150, 142, 0.3)",
                              stroke: "#BE968E",
                              strokeWidth: 2,
                            }}
                          >
                            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-[#545454] font-medium md:text-[14px] text-[10px]">
                    4 months ago
                  </p>
                </div>

                <p className="text-[#020202] MD:text-base text-xs font-normal">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
          <button className="relative w-[207px] h-[53px] rounded-[12px] p-4 text-[#BE968E] bg-[#F5F5F5] self-center font-semibold text-sm ">
            View More Comments
          </button>
          <img
            src="./tinytales-logo-transparent.png"
            className="absolute md:block hidden left-1 lg:bottom-[77px] md:bottom-[33px]  h-[57px] w-[98px] "
          />
        </section>

        <section className="relative flex flex-col gap-6 mt-28">
          <div className="flex flex-col items-start gap-[2px]">
            <h1 className="text-2xl font-semibold text-[#020202]">
              Similar Items
            </h1>
            <span className="bg-[#BE968E] absolute left-0 top-7 w-10 h-1 rounded-[16px]"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:flex md:items-center md:justify-between md:flex-wrap 2xl:gap-4 xl:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex items-start justify-center flex-col w-full sm:w-[300px]"
              >
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-700 ease-in-out w-full">
                  <div className="flex items-start justify-between w-full h-6">
                    {product.discount && (
                      <p className="w-[74px] h-[30px] font-semibold bg-[#FFFFFF4D] text-[#BE968E] border-[#4040401A] border-[1px] rounded-[8px] text-[10px] px-4 flex items-center justify-center text-nowrap">
                        {product.discount}
                      </p>
                    )}

                    <div className="flex items-start justify-center gap-2">
                      <div className="border-[1px] rounded-[8px] border-[#4040401A] p-[6px]">
                        <img
                          src="bag.png"
                          alt="bag"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                      <div className="border-[1px] rounded-[8px] border-[#4040401A] p-[6px]">
                        <img
                          src="heart.png"
                          alt="favorite"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[136px] h-[137px] sm:w-[180px] sm:h-[180px] object-cover rounded-md my-4"
                  />
                </div>

                <div className="flex items-center justify-between gap-1 text-[#BE968E] text-sm mt-2 w-full">
                  <p className="text-[#545454]">Dresses</p>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#BE968E"
                      className="w-5 h-5"
                    >
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between gap-3 w-full mt-2">
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-[#020202] font-medium text-base">
                      AED {product.price}
                    </p>
                    <p className="text-[#8A8A8A] font-medium text-xs line-through leading-none">
                      AED 1300
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {["#BE968E", "#333333", "#E8E8E8"].map((color, i) => (
                      <span
                        key={i}
                        className="w-5 h-5 rounded-full border-0"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 p-4">
            <button className="bg-[#E8EDF2] text-[#020202] w-[50px] h-[50px] p-2 rounded-full border-white border-[1px] opacity-95 hover:opacity-100 hover:cursor-pointer transition-opacity z-10 ml-4">
              &lt;
            </button>
            <button className="bg-[#BE968E] text-white w-[50px] h-[50px] p-2 rounded-full border-white border-[1px] opacity-95 hover:opacity-100 hover:cursor-pointer transition-opacity z-10 mr-4">
              &gt;
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
