const htmldata = [];
const jsData = []; // -> number,string, array, boolean, object

const renderResult = () => {
    // console.log('Data--->',data);
    const tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = htmldata.toString()
    // for (let index = 0; index < data.length; index++) {
    //    tableBody.innerHTML = data[index]   
    // }
}

function generate(){
    const name = document.querySelector('#name').value;
    const tamilMark = parseInt(document.querySelector('#tamil').value);
    const englishMark = parseInt(document.querySelector('#english').value);
    const mathsMark = parseInt(document.querySelector('#maths').value);
    const scienceMark = parseInt(document.querySelector('#science').value);
    const socialMark = parseInt(document.querySelector('#social').value);
    const myform = document.querySelector('#Myform')
    // Total mark
    const totalMark = tamilMark + englishMark + mathsMark + scienceMark + socialMark;

    // Grading system for each subject
    const GradingSystem = (mark) => {
        let grade = '';
        if(mark >= 90){
            grade = 'A';
        } else if(mark >= 70){
            grade = 'B';
        } else if(mark >= 60){
            grade = 'C';
        } else {
            grade = 'Fail';
        }
        return grade;
    }

    const tamilGrade = GradingSystem(tamilMark);
    const englishGrade = GradingSystem(englishMark);
    const mathsGrade = GradingSystem(mathsMark);
    const scienceGrade = GradingSystem(scienceMark);
    const socialGrade = GradingSystem(socialMark);

    let totalGrade = '';
    if(totalMark >= 450) {
        totalGrade = 'A';
    } else if(totalMark >= 350) {
        totalGrade = 'B';
    } else if(totalMark >= 250) {
        totalGrade = 'C';
    } else {
        totalGrade = 'Fail';
    }
    // array index starts from 0
    // array length starts from 1
    // data -> [1] 
    // last index -> 0
    // length -> 1
    const currentLength = htmldata.length;
    const tempVar = `
          <tr>
            <td>${name}</td>
            <td>${tamilGrade}</td>
            <td>${englishGrade}</td>
            <td>${mathsGrade}</td>
            <td>${scienceGrade}</td>
            <td>${socialGrade}</td>
            <td>${totalGrade}</td>
            <td style="display: flex;">
            <button onclick='edit(${currentLength})' class='edit'>Edit</button>
            <button onclick='deleteFromArr(${currentLength})' class='delete'>Delete</button>
            </td>
          </tr>
    `

    const tempName = []
    for (let index = 0; index < jsData.length; index++) {
        tempName.push(jsData[index].studentName)
    }
    
    if(tempName.includes(name)){
       
    }

    htmldata.push(tempVar)
    jsData.push({
        studentName:name,
        tamilMark : tamilMark,
        englishMark: englishMark,
        mathsMark : mathsMark,
        scienceMark: scienceMark,
        socialMark : socialMark
    });
    // data -> [1 , 2 , 3] 
    //last index -> 2
    // length -> 3
    renderResult()
    myform.reset()
}

function clearResult() {
    const resultTag = document.querySelector('#tableBody');
    resultTag.innerHTML = '';

// CRUD -> Create, Read, Update and delete
}

function edit(index){
  const editData = jsData[index]
  const name = document.querySelector('#name');
  const tamilMark = document.querySelector('#tamil');
  const englishMark = document.querySelector('#english');
  const mathsMark = document.querySelector('#maths');
  const scienceMark = document.querySelector('#science');
  const socialMark = document.querySelector('#social');

  name.value = editData.studentName;
  tamilMark.value = editData.tamilMark
  englishMark.value = editData.englishMark
  mathsMark.value = editData.mathsMark
  scienceMark.value = editData.scienceMark
  socialMark.value = editData.socialMark

}

function deleteFromArr(index){
    htmldata.splice(index,1);
    jsData.splice(index,1)
    renderResult()
  }


// 1.single row -> multiple row
// 2. delete option