<template>
    <div :class="{'home-chatbox__message': true, 'home-chatbox__message--me': (msg.author == username) }">
      <div :class="{'home-chatbox__title': true, 'home-chatbox__title--me': (msg.author == username) }">
        <div :class="{'home-chatbox__title-without-date': true, 'home-chatbox__title-without-date--me': (msg.author == username) }">
          <div :class="{'home-chatbox__profil': true, 'home-chatbox__profil--me': (msg.author == username) }">{{ msg.author.substring(0, 2).toUpperCase() }}</div>
          <div :class="{'home-chatbox__message-title': true, 'home-chatbox__message-title--me': (msg.author == username) }">{{msg.author}}</div>
        </div>
        <div class="home-chatbox__message-date" :class="{'home-chatbox__message-date': true, 'home-chatbox__message-date--me': (msg.author == username) }">
            {{ format(msg.timestamp * 1000, "fr") }}
        </div>
      </div>
      

      <div :class="{'home-chatbox__text': true, 'home-chatbox__text--me': (msg.author == username) }">{{msg.content.Text}}</div>
    </div>
</template>

<script setup>
import { format, render, cancel, register } from 'timeago.js';

defineProps({
  msg: Object
})

const localeFunc = (number, index, totalSec) => {
  return [
        ["à l'instant", 'dans un instant'],
        ['%s secondes', 'dans %s secondes'],
        ['1 minute', 'dans 1 minute'],
        ['%s minutes', 'dans %s minutes'],
        ['1 heure', 'dans 1 heure'],
        ['%s heures', 'dans %s heures'],
        ['1 jour', 'dans 1 jour'],
        ['%s jours', 'dans %s jours'],
        ['1 semaine', 'dans 1 semaine'],
        ['%s semaines', 'dans %s semaines'],
        ['1 mois', 'dans 1 mois'],
        ['%s mois', 'dans %s mois'],
        ['1 an', 'dans 1 an'],
        ['%s ans', 'dans %s ans'],
    ][index];
};

register('fr', localeFunc)
const username = localStorage['username']
</script>