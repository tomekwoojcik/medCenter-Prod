import React, { useEffect, useState } from "react";
export default function SearchResultView() {


    const [med, setMed] = useState([])

    const getMed = () => {
        const medCollection = collection(db, 'MedProfession', "PsychologiaCol");
        getDocs(medCollection)
            .then(response => {
                const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
                setMed(meds)
            }).catch(error => { console.log(error.message) })
    }
    useEffect(() => { getMed() }, [])



    return (
        <div className="search_container">

        </div>
    )
}