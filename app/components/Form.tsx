export default function Form() {
    return (
        <form action="" className="
        flex flex-col text-nowrap
        bg-gray-200 rounded-xl
        mt-4 md:mt-12 lg:mt-16 pb-12 mx-auto px-2 md:px-12 select-none
        w-[98vw] md:w-fit">
            <div className="md:flex md:flex-wrap">
                <div className="mt-12 md:mr-2 border-b-2 border-black/40 shadow-lg">
                    <label htmlFor="firstname" className="font-semibold">First Name</label>
                    <input type="text" id="firstname" className="ml-1 bg-inherit border-none focus:outline-none" />
                </div>
                <div className="mt-12 md:ml-2 border-b-2 border-black/40 shadow-lg">
                    <label htmlFor="lastname" className="font-semibold">Last Name</label>
                    <input type="text" id="lastname" className="ml-1 bg-inherit border-none focus:outline-none" />
                </div>
            </div>
            <div className="font-semibold">
                <div className="mt-12 border-b-2 border-black/40 shadow-lg">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="example@email.com" id="email" className="ml-1 bg-inherit border-none focus:outline-none" />
                </div>
                <div className="mt-12 border-b-2 border-black/40 shadow-lg">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" placeholder="(11) 1111-1111" id="phone" className="ml-1 bg-inherit border-none focus:outline-none" />
                </div>
            </div>
        </form>

    )
}