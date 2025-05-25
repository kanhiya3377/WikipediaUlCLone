
const Leftsidebar = () => {

    return (
        <div className="w-[15%] ml-10 mt-2 ">
            <div className="flex gap-4 mb-2.5 mt-10">
                <a href="#" className="font-bold">Contents</a>
                <button className="bg-gray-300 px-2">hide</button>
            </div>
            <hr />
            <div>
                <h2>(Top)</h2>
                <ul className="text-blue-400">
                    <li> <a href="#">Computer Science</a></li>
                    <li><a href="#">Other uses</a> </li>
                    <li><a href="#">See also</a> </li>
                </ul>
            </div>
        </div>
    );
}

export default Leftsidebar;
