import React, {memo, useEffect, useState,} from 'react'
import numeral from "numeral";
import {Card, InputNumber, Form, Row, Col, Statistic} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import imageA from '../../images/Use_4_14.png';
import ImageLabel from "../../components/calculator/ImageLabel";

const Calculator = memo(() => {
  //
  const [a, setA] = useState(0);
  const [aFee, setAFee] = useState(0);
  const [b, setB] = useState(0);
  const [bFee, setBFee] = useState(0);
  const [c, setC] = useState(0);
  const [cFee, setCFee] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);

  const [commission, setCommission] = useState(0);

  useEffect(() => {
  }, [])

  const layout = {
    labelCol: {span: 12},
    wrapperCol: {span: 12},
  };

  const handleChangeA = (value: number) => {
    setA(value)
    setAFee((value / 100) * 48)
  }

  const handleChangeB = (value: number) => {
    setB(value)
    setBFee((value / 10) * 6)
  }

  const handleChangeC = (value: number) => {
    setC(value)
    setCFee((value / 10) * 24)
  }

  const handleChangePotion = (value: number) => {
    setD(value)
    setCommission(Math.ceil(value * 0.05))
  }

  const renderExtra = () => {
    return (
      <Statistic
        value={profit()}
        precision={2}
        valueStyle={{color: profit() > 0 ? '#cf1322' : '#108ee9'}}
        prefix={profit() > 0 ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}
      />
    )
  }

  const profit = () => {
    return ((d - commission) * 3) - (aFee + bFee + cFee + e)
  }

  return (
    <>
      <Row gutter={8}>
        <Col span={8}>
          <Card
            title={<ImageLabel flower={'d'} />}
            extra={renderExtra()}
          >
            <Form {...layout} colon={false}labelAlign={'left'}>
              <Row>
                <Col span={12}>
                  <Form.Item label={<ImageLabel flower={'a'} />}>
                    <InputNumber value={a} onChange={handleChangeA}/>
                  </Form.Item>

                  <Form.Item label={<ImageLabel flower={'b'} />}>
                    <InputNumber value={b} onChange={handleChangeB}/>
                  </Form.Item>

                  <Form.Item label={<ImageLabel flower={'c'} />}>
                    <InputNumber value={c} onChange={handleChangeC}/>
                  </Form.Item>

                  <Form.Item label={<ImageLabel flower={'d'} />}>
                    <InputNumber value={d} onChange={handleChangePotion}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={'제작골드'}>
                    <InputNumber value={e} onChange={setE}/>
                  </Form.Item>
                </Col>
              </Row>
            </Form>

          </Card>
        </Col>
      </Row>
    </>
  )
})

export default Calculator
