import styled from 'styled-components'
import { colors, fonts, media } from './constants'

export const CardWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 100px 100px;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 68px auto 0;
  box-shadow: 0 0 5px ${colors.gray500trans}, 0 0px 10px ${colors.gray500trans};
  border-radius: 5px;
  ${media.xl`
      padding: 70px;
  `};
  ${media.lg`
      padding: 50px;
  `};
  ${media.md`
      display: block;
      box-shadow: 0 0 5px ${colors.gray500trans}, 0 0px 10px ${colors.gray500trans};
      border-radius: 3px;
  `};
  ${media.sm`
      padding: 50px 35px;
      box-shadow: 0 0 5px ${colors.gray500trans}, 0 0px 10px ${colors.gray500trans};
      border-radius: 2px;
  `}
`
export const CardTitle = styled.div`
    width: 300px;
    margin-right: 70px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    .custom-file-upload {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      border-radius: 50%;
      padding: 6px;
      margin-bottom: 25px;
    };
    .img-wrap{
      text-align: left;
      width: 130px;
      height: 130px;
      overflow: hidden;
      border-radius: 50%;
      background: ${colors.gray500};
      opacity: .85;
    };
    .text-wrap{
      justify-content: center;
      padding: 40px 20px 0px;
      width: 250px;
      height: auto;
      overflow: hidden;
      font-weight: 800;
    };
    .profile-name, .profile-title {
      font-weight: 700;
    }
    .img-upload:before{
      content: "\f093";
      font-size: 90px;
      position: absolute;
      padding-top: 80px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: ${colors.gray700};
      width: 130px;
      height: 130px;
      border-radius: 50%;
      opacity: 0;
      transition: .5s ease;
      background-color: #fff;
    };
    .img-upload:hover:before{
     opacity: 1;
    };
    img {
      width: auto;
      height: 100%;
      margin: 0px auto;
    };
    ${media.lg`
        margin-right: 50px;
    `};
    ${media.md`
        width: 150px;
    `};
    ${media.sm`
        text-align: left;
        width: auto;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .custom-file-upload {
          display: block;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          border-radius: 50%;
          padding: 6px;
          margin-bottom: 25px;
        };
    `}
`
export const CardContent = styled.div`
    font-weight: 300;
    font-size: 1rem;
    width: 100%;
    max-width: 550px;
    ${media.sm`
        padding-top: 30px;
        padding-left: 30px;
    `};
    ${media.xs`
        padding-left: 10px;
    `};

    p {
        margin-top: 0;
        margin-bottom: 25px;
    }
    
    span {
        font-weight: 600;
    }
`
export const ListContainer = styled.div`
  width: 400px;
  padding-top: 20px;
  a {
      margin-left: 10px;
  };
`
export const ListItem = styled.div`
    width: 200px;
    text-align: left;
    float: right;
    margin-left: 10px;
    ${media.md`
      float: left;
      margin-left: 30px;
    `};
    ${media.sm`
      float: left;
      margin-left: 20px;
    `};
    ${media.xs`
      float: left;
      margin-left: 10px;
    `}
`
