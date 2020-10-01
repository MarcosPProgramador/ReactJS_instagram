import React from "react";
import {
    Container,
    UserData,
    UserAvatar,
    UserWrapper,
    UserName,
    UserFull,
    Data,
    Users,
    About,
    AboutList,
    AboutTab,
    AboutLink,
    AboutInst,
} from "./sSuggestions";
import User from "./User/User";
import { Button } from "../Button/Button";
const Suggestions = () => {
    let arr = [
        "Sobre",
        "Ajuda",
        "Imprensa",
        "API",
        "Carreiras",
        "Privacidade",
        "Termos",
        "Localizações",
        "Contas mais relevante",
        "sHashtags",
        "Idioma",
    ];
    return (
        <Container>
            <UserData>
                <UserAvatar />
                <UserWrapper>
                    <UserName>username</UserName>
                    <UserFull>firstname lastname</UserFull>
                </UserWrapper>
            </UserData>
            <Data>
                <span>Sugestões para você</span>
                <Button black>Ver tudo</Button>
            </Data>
            <Users>
                <User />
                <User />
                <User />
                <User />
                <User />
            </Users>
            <About>
                <AboutList>
                    {arr.map((e) => {
                        return (
                            <AboutTab>
                                <AboutLink>{e}</AboutLink>
                            </AboutTab>
                        );
                    })}
                </AboutList>
                <AboutInst>© 2020 INSTAGRAM DO FACEBOOK</AboutInst>
            </About>
        </Container>
    );
};

export default Suggestions;
