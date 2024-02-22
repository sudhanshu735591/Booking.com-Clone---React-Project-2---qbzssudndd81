

function UserDetails() {
    return (
        <div>
            <div className="font-bold text-xl">Enter your details</div>

            <div className="flex items-center mt-4 gap-3 border-2 p-3 bg-[#f5f5f5] rounded-xl">
                <svg class="bk-icon -streamline-info_sign" height="16" role="presentation" width="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                <div>Almost done! Just fill in the * required info</div>
            </div>


            <div className="flex w-fit gap-3 flex-wrap items-center mt-3">
                <div className="flex flex-col">
                    <label className="text-red-800 font-bold" for="First Name *">Enter your first name *</label>
                    <span className="flex border-2 bg-red-700">
                        <input type="text" className="border-2 p-1 w-[300px]" />
                        <div className="pl-2 pr-2 flex justify-center items-center text-white">✘
                        </div>
                    </span>
                </div>

                <div className="flex flex-col">
                    <label className="text-red-800 font-bold" for="First Name *">Enter your Last name *</label>
                    <span className="flex border-2 bg-red-700">
                        <input type="text" className="border-2 p-1 w-[300px] " />
                        <div className="pl-2 pr-2 flex justify-center items-center text-white">✘
                        </div>
                    </span>
                </div>

                <div className="flex flex-col">
                    <label className="text-red-800 font-bold" for="First Name *">Enter your email address *</label>
                    <span className="flex border-2 bg-red-700">
                        <input type="text" className="border-2 p-1 w-[300px]" />
                        <div className="pl-2 pr-2 flex justify-center items-center text-white">✘
                        </div>
                    </span>
                </div>
            </div>


            <div className="flex flex-col">
                <label className="text-red-800 font-bold" for="First Name *">Enter your phone number</label>
                <span className="flex border-2 bg-red-700 w-fit">
                    <input type="number" className="border-2 p-1 w-[300px]"/>
                    <div className="pl-2 pr-2 flex justify-center items-center text-white">✘</div>
                </span>
                <p className="font-normal text-sm">Needed by the property to validate your booking</p>
            </div>
        </div>
    )
}


export default UserDetails;