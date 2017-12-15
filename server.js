//node js를 통해 서버 들어가기



//node js문법 require로 npm을 통해 설치한 express기능을 가져온다
//ES6버전 React에서는 import를 통해서 가져오고 
//node js에서는 require방식으로 가져온다

const express=require('express');

//express 메소드를 실행하는 것을 변수 app에 넣는다
const app=express();


//express안에 있는 메소드중 get메소드를 이용해서 /주소로 접속했을때response를 통해 해당 메시지를 서버에 보낸다
app.get('/',(request,response)=>{
    
    
    response.send('hello world');
    
})



//7777이라는 포트로 접속한다는 의미이다
//http://localhost:7777/
app.listen(7777);






//http://localhost:7777/에 접속해서 서버를 동작하게 하려면 cmd에서 node server.js를 쳐서 노드에서 서버를 켜준다
//만약 해당 사이트에 Cannot GET이라고 나온다면 아무 입력을 하지 않았기 때문에 당연하다

//추가로 바뀌는 내용을 실시간으로 보고 싶으면 cmd에서 supervisor server.js를 치면 된다
//기본적으로 supervisor가 깔리나 혹시 없으면 깔아야 이용할수 있다




//깃허브에 바뀐 내용을 이제 올려야 하는데 여기에 일부 내용이 수정되면서 node_module에 있는 내용까지
//모두 커밋해야한다고 떠버린다
//커밋하지 않아도 될 폴더까지 커밋해야한다고 떠버린다

//이것을 방지하기 위해 깃에 커밋하지않을 파일들을 분리하는 파일이 있다
//.gitignore라는 파일을 현재 폴더에 만들고 거기에 파일이나 해당 폴더를 적어주면 그 파일이나 폴더는 커밋하지 않는다(무시함)


//.gitignore라는 파일을 현재 폴더에 만들고 내가 올리고 싶지 않은 파일들을 써준다
//그냥 무시하고 싶은 파일명을 쓰고 저장을 누르면 깃허브 커밋창에서 자동으로 사라진다


//폴더를 제외시키고 싶으면 /를 사용해서 /node_modules로 쓰면 해당 폴더를 커밋에서 제외시킨다
//(기본적으로 npm을 사용하면 node_modules는 올리면 안된다고 보면 된다)



//기본적으로 깃허브 사용순서는 add, commit, push 그리고 집 가서 pull의 순서이다











