import styled from 'styled-components'

const IconImg = styled.img`
    height: 100%;
    width: 100%;
`;

type IconProps = {
    src: string,
    alt: string,
}

export default function Icon({src, alt}: IconProps){
return(
    <>
    <IconImg src={src} alt={alt} />
    </>
)
}