import { styled } from 'styled-components';

import tags from '@components/Gallery/Tags/tags.json';

const ContainerTag = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`;

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: clamp(14px, 4vw, 24px);
    margin: 0;
`;

const Tag = styled.button`
    width: 150px;
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`;

export const Tags = () => {
    return(
        <ContainerTag>
            <TagTitle>Busque por tags:</TagTitle>     
            <Div>
                {tags.map(tag => <Tag key={tag.id}>{tag.title}</Tag>)}
            </Div>           
        </ContainerTag>
    );  
}