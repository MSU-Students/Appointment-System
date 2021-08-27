<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated>
        <q-toolbar class="bg-black">
      <q-toolbar-title>
        MSU APPOINTMENT SYSTEM
      </q-toolbar-title>

    <div class="q-pa-xss q-gutter-sm flex flex-center">
       <q-btn outline rounded color="white" label="Sign Up" class="bg-transparent" > 
           
    
     
       
      </q-btn>
    </div>
    <q-btn flat round dense icon="more_vert" />    
    </q-toolbar>



    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style>
.bg-image
{
  background-image: url(../assets/image/imagess.jpeg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}
</style>

