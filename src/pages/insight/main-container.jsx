import DotIcon from "../../assets/icon/dot-icon";
import { MainContainerImage, MainResponsiveImage } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

const HORIZONTAL_SCROLLING = [
    {
        id: 1,
        thumbnail: MainContainerImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 2,
        thumbnail: MainContainerImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 3,
        thumbnail: MainContainerImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 4,
        thumbnail: MainContainerImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 5,
        thumbnail: MainContainerImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
]

const MAIN_LINKS = [
    {
        id: 1,
        title: 'Design',
    },
    {
        id: 2,
        title: 'Product'
    },
    {
        id: 3,
        title: 'Software Development'
    },
    {
        id: 4,
        title: 'Customer Success',
    },
    {
        id: 5,
        title: 'Leadership',
    },
    {
        id: 6,
        title: 'Management',
    },
]
export default function MainContainer() {
    return (
        <section className="trending-blogs-section bg-black md:py-25 py-8">
            <div className="container">
                <div className="flex md:flex-row flex-col gap-8 md:gap-25">
                    <div className="">
                        <div className="sticky top-25 left-0 flex md:flex-col flex-col md:gap-12 gap-4">
                            <div className="max-w-[510px]">
                                <HeroContant subheading={`Popular insights`} classNameSub={`md:!pb-6 !pb-4  !text-start`} heading={`Trending Articles You Need To Read`} classNamehead={`!pb-3 !text-start md:!leading-[44px] !leading-[40px]`} desc={`Stay Ahead of the Curve and Dive Deep into the Must-Read Trending Articles that Keep You Informed and Inspired`} classNameDesc={`!text-start`} />
                            </div>
                            <div className="grid gap-4">
                                <h2 className="text-base text-[#FFF] font-medium">Blog categories</h2>
                                <div className="w-[300px] md:w-[364px] pb-2">
                                    <input
                                        type="text"
                                        placeholder="Search Any Insight"
                                        className="w-full h-14 text-sm font-normal text-[#FFF] py-2 pl-6 pr-1.5 rounded-full"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.10)",
                                            border: "1px solid rgba(255, 255, 255, 0.20)",
                                            opacity: "0.6",
                                        }}
                                    />
                                </div>

                                <ul className="grid gap-6">
                                    {MAIN_LINKS.map((card =>
                                        <li className="text-[#BDBDBD] text-sm font-semibold" key={card.id}>
                                            {card.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid gap-15 max-w-[785px] min-h-[218px]">
                            {HORIZONTAL_SCROLLING.map((card) => (
                                // <div
                                //     key={card.id}
                                //     className="flex md:flex-row flex-col justify-between items-center rounded-[16px] overflow-hidden"
                                //     style={{
                                //         border: "1px solid rgba(255, 255, 255, 0.20)",
                                //     }}
                                // >
                                //     <img
                                //         src={card.thumbnail}
                                //         alt="scrolling-image"
                                //         width={302}
                                //         height={218}
                                //         loading="lazy"
                                //         className="hidden object-cover md:block md:w-fit w-full md:rounded-l-[16px] md:rounded-tr-none"
                                //     />
                                <div
                                    key={card.id}
                                    className="flex md:flex-row flex-col justify-between items-center rounded-[16px] overflow-hidden"
                                    style={{
                                        border: "1px solid rgba(255, 255, 255, 0.20)",
                                    }}
                                >
                                    <img
                                        src={card.thumbnail}
                                        alt="scrolling-image"
                                        loading="lazy"
                                        className="hidden md:block w-full h-full object-cover md:max-w-[302px] md:h-[218px] rounded-l-[16px] md:rounded-tr-none"
                                    />


                                    <img
                                        src={MainResponsiveImage}
                                        alt="main-responsive"
                                        width={327}
                                        height={246}
                                        loading="lazy"
                                        className="block md:hidden w-full rounded-t-[16px]"
                                    />

                                    <div
                                        className="px-5 h-full py-6 grid items-center md:rounded-r-[16px]"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.08)",
                                        }}
                                    >
                                        <h3 className="text-[20px] font-[Geologica] text-[#FFF] font-semibold pb-3">
                                            {card.title}
                                        </h3>
                                        <p className="md:text-sm text-base font-normal text-[#FFF] leading-[25px] md:pb-6 pb-4">
                                            {card.desc}
                                        </p>
                                        <div className="flex gap-2 items-center">
                                            <span className="text-xs text-[#FFF] font-normal">{card.time}</span>
                                            <DotIcon />
                                            <span className="text-xs text-[#FFF] font-normal">{card.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}








// import React, { useState, useMemo } from "react";
// import { Link } from "react-router-dom";
// import DotIcon from "../../assets/icon/dot-icon";
// import { MainContainerImage } from "../../assets/images";
// import HeroContant from "../../component/common/hero-contant/hero-contant";

// export default function MainContainer() {
//     const HORIZONTAL_SCROLLING = [
//         {
//             id: 1,
//             thumbnail: MainContainerImage,
//             title: "20+ GenAI UX patterns, examples and implementation tactics",
//             desc: "A shared language for product teams to build usable, intelligent and safe GenAI...",
//             time: "7 min read",
//             date: "Jan 23, 2025",
//         },
//         {
//             id: 2,
//             thumbnail: MainContainerImage,
//             title: "20+ GenAI UX patterns, examples and implementation tactics",
//             desc: "A shared language for product teams to build usable, intelligent and safe GenAI...",
//             time: "7 min read",
//             date: "Jan 23, 2025",
//         },
//         {
//             id: 3,
//             thumbnail: MainContainerImage,
//             title: "20+ GenAI UX patterns, examples and implementation tactics",
//             desc: "A shared language for product teams to build usable, intelligent and safe GenAI...",
//             time: "7 min read",
//             date: "Jan 23, 2025",
//         },
//     ];

//     const MAIN_LINKS = [
//         {
//             id: 1,
//             title: "Design",
//             value: "design",
//         },
//         {
//             id: 2,
//             title: "Product",
//             value: "product",
//         },
//         {
//             id: 3,
//             title: "Software Development",
//             value: "software",
//         },
//         {
//             id: 4,
//             title: "Customer Success",
//             value: "customer",
//         },
//         {
//             id: 5,
//             title: "Leadership",
//             value: "leadership",
//         },
//         {
//             id: 6,
//             title: "Management",
//             value: "management",
//         },
//     ];

//     const [category, setCategory] = useState("all");
//     const [capabilities] = useState(HORIZONTAL_SCROLLING);
//     const [search, setSearch] = useState("");

//     const filteredData = useMemo(() => {
//         const searchLower = search.trim().toLowerCase();

//         if (category === "all" && searchLower === "") return capabilities;

//         return capabilities.filter((item) => {
//             const title = item.title.toLowerCase();
//             const desc = item.desc.toLowerCase();

//             if (category === "all") {
//                 return title.includes(searchLower);
//             }

//             return (
//                 desc.includes(category.toLowerCase()) &&
//                 title.includes(searchLower)
//             );
//         });
//     }, [category, search, capabilities]);

//     const handleCategory = (value) => {
//         setCategory(value);
//     };

//     return (
//         <section className="bg-black md:py-25 py-8">
//             <div className="container">
//                 <div className="flex md:flex-row flex-col gap-11">
//                     <div className="md:w-1/3 w-full">
//                         <div className="sticky top-24 left-0 flex flex-col md:gap-12 gap-4">
//                             <div className="max-w-[550px]">
//                                 <HeroContant
//                                     subheading={`Popular insights`}
//                                     classNameSub={`md:!pb-6 !pb-4  !text-start`}
//                                     heading={`Trending Articles You Need To Read`}
//                                     classNamehead={`!pb-3 !text-start md:!leading-[44px] !leading-[40px]`}
//                                     desc={`Stay Ahead of the Curve and Dive Deep into the Must-Read Trending Articles that Keep You Informed and Inspired`}
//                                     classNameDesc={`!text-start`}
//                                 />
//                             </div>

//                             <div className="grid gap-3">
//                                 <h2 className="text-base text-[#FFF] font-medium">
//                                     Blog categories
//                                 </h2>
//                                 <div>
//                                     <input
//                                         onChange={(e) => setSearch(e.target.value)}
//                                         value={search}
//                                         type="text"
//                                         placeholder="Search Any Insight"
//                                         className="text-sm font-normal text-[#FFF] py-2 pl-6 pr-1.5 rounded-full w-full"
//                                         style={{
//                                             background: "rgba(255, 255, 255, 0.10)",
//                                             border: "1px solid rgba(255, 255, 255, 0.20)",
//                                             opacity: "0.6",
//                                         }}
//                                     />
//                                 </div>

//                                 <ul className="grid gap-2.5">
//                                     <li key="all">
//                                         <button
//                                             className={`text-sm font-semibold cursor-pointer ${category === "all"
//                                                 ? "text-white"
//                                                 : "text-[#BDBDBD]"
//                                                 }`}
//                                             onClick={() => handleCategory("all")}
//                                         >
//                                             All
//                                         </button>
//                                     </li>
//                                     {MAIN_LINKS.map((link) => (
//                                         <li key={link.id}>
//                                             <button
//                                                 className={`text-sm font-semibold cursor-pointer ${category === link.value
//                                                     ? "text-white"
//                                                     : "text-[#BDBDBD]"
//                                                     }`}
//                                                 onClick={() => handleCategory(link.value)}
//                                             >
//                                                 {link.title}
//                                             </button>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="md:w-2/3 w-full">
//                         <div className="grid gap-8">
//                             {filteredData.length > 0 ? (
//                                 filteredData.map((card) => (
//                                     <div
//                                         key={card.id}
//                                         className="flex md:flex-row flex-col justify-between rounded-[16px] overflow-hidden"
//                                         style={{
//                                             border: "1px solid rgba(255, 255, 255, 0.20)",
//                                         }}
//                                     >
//                                         <img
//                                             src={card.thumbnail}
//                                             alt="scrolling-image"
//                                             width={302}
//                                             height={218}
//                                             loading="lazy"
//                                             className="hidden md:block md:w-fit w-full md:rounded-l-[16px] md:rounded-tr-none"
//                                         />
//                                         <img
//                                             src="src/assets/images/main-responsive.png"
//                                             alt="main-responsive"
//                                             width={327}
//                                             height={246}
//                                             loading="lazy"
//                                             className="block md:hidden w-full rounded-t-[16px]"
//                                         />

//                                         <div
//                                             className="px-5 py-6 grid items-center md:rounded-r-[16px]"
//                                             style={{
//                                                 background: "rgba(255, 255, 255, 0.08)",
//                                             }}
//                                         >
//                                             <h3 className="text-[20px] font-[Geologica] text-[#FFF] font-semibold pb-3">
//                                                 {card.title}
//                                             </h3>
//                                             <p className="md:text-sm text-base font-normal text-[#FFF] leading-[25px] md:pb-6 pb-4">
//                                                 {card.desc}
//                                             </p>
//                                             <div className="flex gap-2 items-center">
//                                                 <span className="text-xs text-[#FFF] font-normal">
//                                                     {card.time}
//                                                 </span>
//                                                 <DotIcon />
//                                                 <span className="text-xs text-[#FFF] font-normal">
//                                                     {card.date}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p className="text-gray-400 text-lg font-semibold">
//                                     Data not found
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
