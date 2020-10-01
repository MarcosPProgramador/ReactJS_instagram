import React from "react";
import {
    Container,
    UserInfo,
    User,
    Avatar,
    UserName,
    Readmore,
    WrapperUser,
    UserImage,
    Overlay,
    UserDatas,
    Comments,
    Icons,
    FloatIcon,
    HeartIcon,
    SendIcon,
    LikeFor,
    LikeAvatar,
} from "./sFeedUser";

const FeedUser = () => {
    const name = "username";
    const ctt = 3;
    const ctt_2 = ctt - 1;

    const pluralOrSingular = (el) => {
        let entity = el.length - 1;
        let smaller = ctt_2 <= 1;

        if (smaller) 
            return el.substr(0, entity);
            return el;
    };
    return (
        <Container>
            <UserInfo>
                <User>
                    <WrapperUser>
                        <Avatar />
                        <UserName>
                            <a href="/">{name}</a>
                        </UserName>
                    </WrapperUser>

                    <Readmore className="cp">
                        <svg
                            aria-label="Mais opções"
                            className="_8-yf5 "
                            fill="#262626"
                            height="16"
                            viewBox="0 0 48 48"
                            width="16"
                        >
                            <circle
                                clipRule="evenodd"
                                cx="8"
                                cy="24"
                                fillRule="evenodd"
                                r="4.5"
                            ></circle>
                            <circle
                                clipRule="evenodd"
                                cx="24"
                                cy="24"
                                fillRule="evenodd"
                                r="4.5"
                            ></circle>
                            <circle
                                clipRule="evenodd"
                                cx="40"
                                cy="24"
                                fillRule="evenodd"
                                r="4.5"
                            ></circle>
                        </svg>
                    </Readmore>
                </User>
            </UserInfo>
            <UserImage>
                <img src="" alt="" />
                <Overlay />
            </UserImage>
            <UserDatas>
                <Icons>
                    <Comments>
                        <HeartIcon />
                        <FloatIcon />
                        <SendIcon />
                    </Comments>
                    <svg
                        aria-label="Salvar"
                        className="_8-yf5 cp"
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                    >
                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                    </svg>
                    <svg
                        style={{ display: "none" }}
                        aria-label="Remover"
                        className="_8-yf5 cp"
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                    >
                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path>
                    </svg>
                </Icons>
                <LikeFor>
                    <LikeAvatar />
                    <span>
                        {ctt > 1 ? (
                            <div>
                                Curtido por <strong>{name}</strong> e{" "}
                                <strong>
                                    {pluralOrSingular("outras")} {ctt_2}{" "}
                                    {pluralOrSingular("pessoas")}
                                </strong>
                            </div>
                        ) : (
                            <div>
                                Curtido por <strong>{name}</strong>
                            </div>
                        )}
                    </span>
                </LikeFor>
            </UserDatas>
        </Container>
    );
};

export default FeedUser;
