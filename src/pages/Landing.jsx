import Header from "../components/atoms/Header";
import StudentList from "../components/organism/StudentList";
import Page from "../components/organism/Page";
import Picture from "../components/atoms/Picture";
import Caption from "../components/atoms/Caption";


function Langing() {
    
    const studentList = [
        {
            id:1,
            name:"Nancy",
        },{
            id:2,
            name:"Yahir Dev",
        },{
            id:3,
            name:"Yostin Dev",
        },{
            id:4,
            name:"Alan",
        },{
            id:5,
            name:"Alejandro",
        }
    ]

    return(
        <>
        <Page></Page>
        </>
    )

}

export default Langing;