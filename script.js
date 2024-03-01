
function random_num() {
    var minm = 10000;
    var maxm = 99999;
    var randomNum = Math.floor(Math
        .random() * (maxm - minm + 1)) + minm;

    return randomNum;
}

const students = {

    id: random_num(),
    name: 'Abhin',
    email: 'abhinshelly@gmail.com',
    clgId: 220104,
    internalMarks: {
        firstInternal: 20,
        secondInternal: 30
    },
    subjectsMarks: [],
    scholarshipApplied : false

}

function applyScholarShip(){

    students.scholarshipApplied = !(students.scholarshipApplied);

    console.log(students);

    if(students.scholarshipApplied){
        updateMsgBox("Scholarship applied successfully..");
        document.querySelector('.applyScho-btn').innerText='Remove Scholarship';
    }else{
        updateMsgBox("Scholarship removed successfully..");
        document.querySelector('.applyScho-btn').innerText='Apply For Scholarship';
    }

}

function addSubjects(){


    while(true){

        var sub = window.prompt("Enter Subject Name");

        var mark = window.prompt("Enter Subject Mark");

        if(mark < 0 || mark > 100){
            window.alert("invalid marks..Re-enter");
            addSubjects();
        }else{

            subjObj = {

                sub : sub,
                mark : Number(mark)
            }

            students.subjectsMarks.push(subjObj);
            updateMsgBox("Subjects added successfully..");

        }

        var choice = window.prompt("Do you want to add another subject? (yes/no)");

        if(choice == "no" || choice == "No" || choice == "NO"){

            break;

        }

    }

    

}

function updateMsgBox( msg ){

    var msgBox = document.getElementById("msg-box");
    msgBox.classList.remove("translate-x-[-420px]");
    msgBox.innerText = msg;
    
    setTimeout(()=>{
        msgBox.classList.add("translate-x-[-420px]");
    },3000)

}
