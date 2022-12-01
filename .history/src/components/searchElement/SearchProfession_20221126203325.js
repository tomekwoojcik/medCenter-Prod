
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
export function SearchProfession () {
  // const [hidden, setHidden] = useState("none");
  const [word, setWord] = useState(' ')
  const { handleProfesion, uniqeProfessionMed, setHidden, hidden } = UserAuth()
  console.log(hidden)
  return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj specjalizacje:
                <input value={word} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(true) }} className="search" type="text"></input>

            </label>
            {
                hidden
? <ul onMouseLeave={() => { setHidden(false) }} className="search_List" >
                    {
                        uniqeProfessionMed.map((el) => {
                          return (
                                <li className="list_Button" key={el} >
                                    <button value={el} onClick={(e) => handleProfesion(e, 'value')}>{el}</button>
                                </li>
                          )
                        })

                    }
                </ul >
: null}

        </div>
  )

}