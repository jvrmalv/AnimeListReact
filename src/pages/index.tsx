import type { NextPage } from 'next'
import View from "@commons/View"
import Nav from "@components/Nav/Nav"
import Welcome from "@components/Welcome/Welcome"
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <View>
      <Nav/>
      <Welcome/>
    </View>
  )
}

export default Home
