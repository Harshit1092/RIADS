import { useState } from "react"
import testData from '../data/testData.json';
import TestForm from "./global/TestForm";
import Topbar from "../../AdminPanel/scenes/global/Topbar";
import Sidebar from "../../AdminPanel/scenes/global/Sidebar";
import {db} from '../../../firebase';
import { useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';


const CandidateTest = () => {

    const [QuestionId, setQuestionId] = useState(0);
    const [isSidebar, setIsSidebar] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [language, setLanguage] = useState("English");

    useEffect(()=>{
      const getData = async()=>{
          const q = query(collection(db, "test-questions"), where('Language', '==', language),);
          await getDocs(q).then((response)=>{
              let data = response.docs.map((ele)=>(
                  {...ele.data()} 
              ))
              setQuestions(data);
          })
      }
      getData();
    }, [language])

    function handleNextQuestion(){
      if(QuestionId < questions.length-1 ){
        setQuestionId((QuestionId)=>QuestionId+1);
      }
    }
    function handlePrevQuestion(){
      if(QuestionId>0){
        setQuestionId((QuestionId)=>QuestionId-1);
      }
    }

    function handleLanguageChange(event){
      const lang = event.target.value;
      setLanguage(lang);
    }

  return (
    <div className="min-h-screen h-full">

      <div>
        <Topbar/>
      </div>

      <div className="min-h-screen h-full flex flex-row">
          <div>
            <Sidebar isSidebar={isSidebar}/>
          </div>

          <div className="w-full flex flex-col">
            <div className="mx-auto flex justify-end w-2/3 ">
              <div className="px-2">
                Choose Language
              </div>
              <select className="px-2" name="lang" id="lang" onChange={handleLanguageChange}>
                <option value={"English"}>English</option>
                <option value={"Punjabi"}>Punjabi</option>
              </select>
            </div>
            <TestForm data = {questions[QuestionId]} />
            
            <div className="w-2/3 mx-auto flex justify-between">
              <button onClick={handlePrevQuestion} className="border-2 border-gray-300 px-2 hover:bg-gray-200 active:bg-gray-300">
              Prev
              </button>
              <button onClick={handleNextQuestion} className="border-2 border-gray-300 px-2 hover:bg-gray-200 active:bg-gray-300">
              Next
              </button>
            </div>
          
          </div>

      </div>
    
    </div>
  )
}

export default CandidateTest