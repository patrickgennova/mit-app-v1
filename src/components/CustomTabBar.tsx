import React from 'react';
import styled from 'styled-components/native';

// import DocsIcon from '../../assets/icon-tabs/docs-icon.svg';

const TabArea = styled.View`
    height: 60px;
    flex-direction: row;
    background-color: #ffffff;
    padding-bottom: 16px;
    padding-top: 16px;
    border-top: 1px solid #151f3d;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #46c0a3;
    border-radius: 35px;
    border: 3px solid #fff;
    margin-top: -48px;
`;

export default ({ state, navigation }) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>

            <TabItem opPress={() => goTo("Home")}>
                {/* <DocsIcon style={{opacity: state.index===0?1:0.7}} width="24" height="24" /> */}
            </TabItem>
            
            <TabItemCenter opPress={() => goTo("NotaFiscal")}>
                {/* <DocsIcon width="32" height="32" /> */}
            </TabItemCenter>
            
            <TabItem opPress={() => goTo("Docs")}>
                {/* <DocsIcon style={{opacity: state.index===0?1:0.7}} width="24" height="24" /> */}
            </TabItem>
        </TabArea>
    )
}