import React from "react";

const MainContent = () => {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center mt-4">

      <div className="flex justify-between w-[90%]">
        <p className="text-2xl font-semibold">Coding</p>
        <div className="text-blue-400 flex gap-2">
        
          <p>语言</p>
          <select name="" id="option">
            <option value="option" defaultValue>
              5 languages
            </option>
            <option value="option">Hindi</option>
            <option value="option">English</option>
            <option value="option">Spanish</option>
            <option value="option">Chiness</option>
            <option value="option">Japanes</option>
          </select>
        </div>
        
      </div>
     <hr className="h-2 mt-1 w-[90%] text-gray-400" />
      

      <div className="flex justify-between w-[90%] text-blue-400">
        <div className="flex gap-3">  
          <a href="#" className="text-black border-b-2" >Article</a>
          <a href="#">Talk</a>
        </div>

        <div>
          <ul className="flex gap-3">
            <li>
              <a href="#" className="text-black border-b-2" >Read</a>
            </li>
            <li> <a href="#">Edit</a> </li>
            <li><a href="#">View history</a> </li>
            <li>
              <select name="" id="option">
                <option value="option">Tools</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

    <hr className="h-2 mt w-[90%] text-gray-400" />
      <div className="flex flex-col my-3 w-[90%] relative mx-auto">
        <p>From Wikipedia, the free encyclopedia</p>
        <p> <strong>Coding</strong> may refer to:</p>
        <div className="absolute right-0 top-0 flex border border-gray-500
         bg-gray-100 rounded-xs px-2 py-1 gap-3 ">
          <div>
            <ul>
              <li>你好 你好 你好</li>
              <li>你好 你好 你好</li>
              <li>你好 你好 你好</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                Look up <a href="#">coding</a> in
              </li>
              <li>Wiktionary, the free</li>
              <li>directory.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] mt-3">
        <h2 className="text-2xl font-semibold">Computer science <a href="#" className="text-blue-400">[edit]</a></h2>
        <hr className="h-2 mt-1 w-[60%] text-gray-400" />
        <ul className="list-disc">
          <li>
            <p>
              <a href="#" className="text-blue-400">Computer programming,</a>
              <span>
                the process of creating and maintaining the source code of
                computer programs
              </span>
            </p>
          </li>
          <li>
            <p>
             
              <a href="#" className="text-blue-400" >Line coding,</a>
              <span>in data storage</span>
            </p>
          </li>
          <li>
            <p>
              
              <a href="#" className="text-blue-400" >Source coding,</a>
              <span>compression used in data transmission</span>
            </p>
          </li>
          <li>
            <a href="#" className="text-blue-400" >Coding theory</a>
          </li>
          <li>
            <a href="#" className="text-blue-400" >Channel coding</a>
          </li>
        </ul>
      </div>
      
      

      <div className="w-[90%] mt-3">
        <h2 className="text-2xl font-semibold" >Other uses <a href="#" className="text-blue-400" >[edit]</a></h2>
        <hr className="h-2 mt-1 w-[90%] text-gray-400" />

        <ul  className="list-disc" >
          <li>
            <p>
              
              <a href="#" className="text-blue-400" >Coding (social science),</a>
              <span>
                an analytical process in which data are categorized for analysis
              </span>
            </p>
          </li>
          <li>
            <p>
              
              <a href="#" className="text-blue-400" >Coding strand</a>
              <span> of DNA in molecular biology</span>
            </p>
          </li>
          <li>
            <p>
              
              <a href="#" className="text-blue-400" >Legal coding,</a>
              <span>
                the process of creating summary or keyword data from a document
                in the legal profession
              </span>
            </p>
          </li>
          <li>
            <p>
              
              <a href="#" className="text-blue-400" >Medical coding</a>
              <span>
                representation of medicla diagnoses and procedure in standard
                code numbers
              </span>
            </p>
          </li>
          <li>
            <p>
              
              <a href="#" className="text-blue-400" >Number coding in Metro Manila,</a>
              <span>
                a road space rationing policy implemented in Metro Manila,
                Philipines.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
