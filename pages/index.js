import React, { useState } from 'react'

import Head from 'next/head'
import Footer from '../src/components/Footer'
import Buttom from '../src/components/Button'
// import { motion } from "framer-motion"
import { useRouter } from 'next/router'

import db from '../db.json';
import Widget from '../src/components/Widget'
import Quizbackground from '../src/components/Quizbackground'
import QuizContainer from '../src/components/Quizcontainer'
import QuizLogo from '../src/components/Quizlogo'

export default function Home() {
  const router = useRouter()

  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`quiz?name=${name}`)
  }

  return (
    <Quizbackground backgroundImage={db.bg}>
      <QuizLogo className="logo"/>
      <Head>
        <title> Alura Quiz - O chevette </title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend.... Chevette</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Umas frases maneira sobre chevette e desafiando a pessoa a
              descobrir o que ela sabe sobre esse carro incrível
            </p>
            <form  onSubmit={handleSubmit}>
              <input id="userName" placeholder="joga no seu nome aqui !" onChange={handleChange}/>
              <Buttom disabled={name.length === 0}  type="submit"> JOGAR { name } </Buttom>
            </form>
          </Widget.Content>
        </Widget>
          <Widget.Content>
            <h1> Um quiziho pra galera do chevette </h1>

            <p> Um texto legal pra vocês </p>
          </Widget.Content>
          <Footer />
        <Widget />

      </QuizContainer>
    </Quizbackground>
  );
}
