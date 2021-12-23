import styled from "styled-components";
export const Card = styled.div`

    max-width: 300px;
    border: 1px solid #000000;
    
`
export const Thumb = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
export const Picture = styled.img`
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    max-width: 200px;
`
export const Stats = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 0;
    padding: 0;
`
export const Item = styled.li`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    border: 1px solid #000000;
`
export const Title = styled.span`
    font-weight: bold;
`
export const Name = styled.p`
    text-align: center;
    font-weight: bold;
`
export const Info = styled.p`
    text-align: center;
    color: #8b8b8b;

    margin-top: 5px;
    margin-bottom: 0px;
`
