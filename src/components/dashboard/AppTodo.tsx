import React, { Fragment } from "react";
import TextField from "@component/text-field/TextField";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Box from "@component/Box";
import AppCard from "./AppCard";
import Typography from "@component/Typography";
import Icon from "@component/icon/Icon";
import Button from "@component/buttons/Button";
import { flex } from 'styled-system';
import { space } from 'styled-system';
import IconButton from "@component/buttons/IconButton";


const AppTodo: React.FC = () => {
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
                />
                <Button color="primary" ml={3} mr={4} mt={4} size="small" variant="outlined">+ Add App</Button>
            </FlexBox>
        </Grid>
        <Grid item lg={4} spacing={4} vertical_spacing={15}>
            <AppCard p={10} shadow={2} borderRadius={8}> 
                <FlexBox >
                    <IconButton>
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
                        App 1
                    </Typography>
                </FlexBox>
            </AppCard>

            <AppCard p={10} shadow={2} borderRadius={8}> 
                <FlexBox >
                    <IconButton>
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
                        App 1
                    </Typography>
                </FlexBox>
            </AppCard>
            <AppCard p={10} shadow={2} borderRadius={8}> 
                <FlexBox >
                    <IconButton>
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
                        App 1
                    </Typography>
                </FlexBox>
            </AppCard>
            
        </Grid>
    </FlexBox>
  );
};

export default AppTodo;
