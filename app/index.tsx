import {Redirect} from 'expo-router';
import {useEffect, useState} from 'react';

export default function IndexPage(){
    // Redirect to login screen for now (no auth yet)
    return <Redirect href = "/login"/>;
}