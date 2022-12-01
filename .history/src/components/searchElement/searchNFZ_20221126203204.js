import React from 'react'
import { UserAuth } from '../context/AuthContext'
export function SearchNFZ () {
  const { handleCityButton, hiddenSec, setHiddenSec, wordOne, setWordOne, ar } = UserAuth()

  return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj odział NFZ:
                <input value={wordOne} onChange={e => setWordOne(e.target.value)} onClick={() => { setHiddenSec(true) }}className="search" type="text"></input>
            </label>
            {hiddenSec
              ? <ul onMouseLeave={() => { setHiddenSec(false) }} className="search_List">
                {
                    ar.map((el) => {
                      return (<li className="list_Button" key={el}>
                            <button value={el} onClick={(e) => handleCityButton(e, 'value')}>{el}</button>
                        </li>)
                    })
                }
            </ul>
              : null}

        </div>
  )
}
