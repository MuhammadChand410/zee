import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function OurTeam() {
    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[436px]">
                        <HeroContant subheading={`Our Team`} classNameSub={`!pb-4`} heading={`Meet the people behind the magic`} classNamehead={`sm:!leading-[54px] !leading-[40px] !pb-4`} desc={`Rest assured. Your project is in good hands.`} classNameDesc={``} />
                    </div>
                </div>
            </div>
        </section>
    )
}