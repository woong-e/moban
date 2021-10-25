import React, {memo} from "react";
import styled from "styled-components";

import imageA from "../../images/Use_8_46.png";
import imageB from "../../images/Use_4_14.png";
import imageC from "../../images/Use_8_47.png";
import imageD from "../../images/Battle_Item_01_8.png";

type ImageLabelType = {
  flower: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ImageLabel = memo((props: ImageLabelType) => {
  //
  const {
    flower
  } = props;

  const getFlower = (kind: string) => {
    const flowers: any = {
      a: {
        text: '들꽃',
        image: imageA,
        background: 'linear-gradient(135deg,#313131,#585858)',
        color: '#222222'
      },
      b: {
        text: '수줍은 들꽃',
        image: imageB,
        background: 'linear-gradient(135deg,#1e2d0b,#304911)',
        color: '#6fc300'
      },
      c: {
        text: '화사한 들꽃',
        image: imageC,
        background: 'linear-gradient(135deg,#112739,#113d5d)',
        color: '#bf00fe'
      },
      d: {
        text: '정령의 회복약',
        image: imageD,
        background: 'linear-gradient(135deg,#2e123c,#480d5d)',
        color: '#bf00fe'
      }
    }

    return flowers[flower][kind];
  }

  return (
    <Container>
      <div style={{marginRight: '4px', background: getFlower('background')}}>
        <img src={getFlower('image')} width={30} height={30} alt={getFlower('text')}/>
      </div>
      <div style={{color: getFlower('color')}}>
        {getFlower('text')}
      </div>
    </Container>
  )
})

export default ImageLabel;
