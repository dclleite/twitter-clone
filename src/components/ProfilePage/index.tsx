import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Eduardo Leite</h1>
        <h2>@dclleite</h2>

        <p>
          Developer at <a href="https://agenciazetta.ufla.br/">@Zetta</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Lavras, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de fevereiro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      {/* <Feed /> */}
    </Container>
  );
}

export default ProfilePage;