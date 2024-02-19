import React from 'react';

const SpreadOperator = () => {

    1
    // const fullName = ["M", "TAHMID"];
    // const bioData = [1, ...fullName, "Dhaka"]

    // console.log(bioData)

    // 2
    // Concatinate
    // const gamesOne = ["cricket", "football"];
    // const gamesTwo = ["Badminton", "Hocky"];

    // const games = [...gamesOne, ...gamesTwo]

    // console.log(games)



    //3 Spread Operator With Distructure

    // const games = ["cricket", "football", "Badminton", "Hocky"]

    // const [firstArray, ...remaining] = games  // games array 0 index print hobe then remaining array gulo array akare show korbe

    // console.log(firstArray)
    // console.log(remaining)


    // ===================== Object ====================

    const fullName = {
        fname: "M",
        lName: "TAHMID"
    }

    const bioData = {
        id: 1,
        ...fullName,
        age: 24
    }

    console.log(bioData)




    return (
        <>




        </>
    );
};

export default SpreadOperator;