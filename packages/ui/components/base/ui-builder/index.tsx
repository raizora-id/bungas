import { Button } from "../button.tsx";
import { Accordion } from "../accordion.tsx";
import { Alert, AlertDescription, AlertTitle } from '../alert/index.tsx';
import { Avatar } from '../avatar/index.tsx'


import { createBuilder } from "./builder.ts";

const { Builder } = createBuilder({
    Button,
    Accordion, 
    AlertDescription,
    AlertTitle,
    Alert,
    Avatar
})

export default Builder