import React, { useEffect, useState } from "react";
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import {
  Icon,
  Image,
  Header,
  Menu,
  Segment,
  Sidebar, Card, Button
} from 'semantic-ui-react'

import "./homeStyle.css";

// comps
import Nav from "../../components/Nav";
import SliderWithCards from "./Slider";


export default function Home() {
  const [visible, setVisible] = useState(false);

  const { open, close } = useWeb3Modal()
  const { address, isConnecting, isDisconnected } = useAccount()


  return (
    <>
      <nav className="nav" >
        <Menu fixed='top' style={{ paddingTop: "20px", paddingBottom: "20px" }} >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "95%", paddingLeft: "10px", paddingRight: "10px" }}>
            <Header as='h2'>
              <Icon name='money bill alternate outline' />
              <Header.Content href="/" as='a' style={{color: "black"}}>Fund Trust</Header.Content>
            </Header>
            <Button size="mini"><Icon name="upload"/>Create</Button>
          </div>

          <Menu.Menu position='right' style={{ marginLeft: "20px !important", paddingLeft: "20px !important" }} >
            <Menu.Item style={{ display: "flex", alignItems: "center", justifyContent: "end" }} onClick={() => setVisible(!visible)}>
              {/* <Icon name='logo circle' size='large' /> */}
              <Icon name='list layout circle' size='large' />

            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
          >
            <Menu.Item as='a' href="/projects" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height:"60px"}}>
              Projects
              <Icon name='barcode' />
            </Menu.Item>
            <Menu.Item as='a' href="/" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height:"60px"}}>
              Profile
              <Icon name='chevron down' />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            {/* home */}
            <section id="homePage">
              <div id="heroSection">
                <h1 style={{padding: 0, margin: 0, textAlign: "center"}}>
                Fund Trust
                </h1>
                <h3 style={{padding: 0, margin: 0, textAlign: "center"}}>
                  Trust That Shit!
                </h3>
              </div>
              <div>
                <SliderWithCards />
              </div>
            </section>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </nav>

    </>
  );
}
