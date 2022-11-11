import React ,{useState} from "react";
import TextField from "@component/text-field/TextField";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import AppCard from "./AppCard";
import Typography from "@component/Typography";
import Icon from "@component/icon/Icon";
import Button from "@component/buttons/Button";
import IconButton from "@component/buttons/IconButton";
import { textStyle } from 'styled-system';
import { color } from 'styled-system';

const AppTodo: React.FC = () => {

  const [title, setTitle] = useState('')
  const [apps, setApps] = useState([
    {
      id: 1,
      title: "App 1"
    },
    {
      id: 2,
      title: "App 2"
    },
    {
      id: 3,
      title: "App 3"
    }
  ]);

  const onChangeHandle = e => {
    setTitle(e.target.value);
  }

  const addApp=()=> {
    if(title == '' || title.length<3) {
      alert('Enter atlast 3 char in one app');
      return 0;
    }
    if(apps[apps.length-1] == undefined) {
      setApps([...apps, { id: 0, title: title }]);
    } else {
      setApps([...apps, { id: apps[apps.length-1].id+1 || 1 , title: title }]);
    }
    setTitle('');
  }

  const keyDownEnvt = (e) => {
    console.log(e);
    addApp();
  }

  const removeAppById = item => {
    let newApp= apps.filter(app=> app !=item )
    console.log(newApp);

    setApps(newApp);
  }

  return (
    <FlexBox width="100%">
        <Grid item lg={8} spacing={4} >
            <FlexBox flex={[4,1]}>
                <TextField
                  mb="0.75rem"
                  name="appName"
                  placeholder="App Name"
                  label="App Name"
                  type="text"
                  fullwidth
                  value={title}
                  onChange={onChangeHandle}
                  onKeyUp={(e)=> e.keyCode === 13 ? keyDownEnvt(e):''}
                />
                <Button onClick={addApp} color="primary" ml={3} mr={4} mt={4} size="small" variant="outlined">+ Add App</Button>
            </FlexBox>
        </Grid>
        <Grid item lg={4} spacing={4} vertical_spacing={15}>
          {apps.length <1? <Typography color="#D23F57"><h2>No App yet!</h2></Typography> :''}
          {
            apps.map(app => {
              return (
                <AppCard key={app.id} p={10} shadow={2} borderRadius={8}> 
                  <FlexBox >
                      <IconButton onClick={()=>removeAppById(app)}>
                           <Typography>
                              <Icon
                                variant="small"
                                defaultcolor="currentColor"
                                size="1rem"  
                              >
                                trash
                              </Icon>
                          </Typography>
                      </IconButton>
                     
                      <Typography mt={2}>
                          {app.title}
                      </Typography>
                  </FlexBox>
              </AppCard>
              )
            })
          }
        </Grid>
    </FlexBox>
  );
};

export default AppTodo;
