import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`

const HomePage = () => {
    return(
        <PageContainer>
            Hello
        </PageContainer>
    )
}

export default HomePage;