import React from 'react';
import { DepartamentsInfoWrap, TitleDepartament, WelcomText, DepartmentsWrap, ItemDepartment, Image } from './DepartmentsSection.elements.ts';
import { departments } from "./../../Data/constants.ts";

const DepartmentsSection: React.FC = () => (
  <>
    <DepartamentsInfoWrap>
      <TitleDepartament> ¿Que es HawkCoded?</TitleDepartament>
      <WelcomText>
        Bienvenido a Hawkcoded, donde la innovación se encuentra con la
        excelencia en el desarrollo de software.
      </WelcomText>
    </DepartamentsInfoWrap>
    <DepartmentsWrap>
      {departments.map((department, index) => (
        <ItemDepartment key={index} data-aos="flip-up">
          <Image loading='lazy' alt='dep_img' src={department.image} />
          <h2>{department.title}</h2>
          <p>{department.description}</p>
        </ItemDepartment>
      ))}
    </DepartmentsWrap>
  </>
);

export default DepartmentsSection;
