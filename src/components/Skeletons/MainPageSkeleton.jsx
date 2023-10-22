import React from 'react';
import * as S from './style';

export const MainPageSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
      <S.HeaderSkeleton>
          <S.HeaderLogoSkeleton >  
          </S.HeaderLogoSkeleton>
          <S.PersonalsSkeleton>
          <S.PersonalLogo/>
            <S.NameSkeleton/>
          </S.PersonalsSkeleton>
      </S.HeaderSkeleton>
        <S.ContentDescription>
          <S.ContentDescriptionPreTitleSkeleton />
          <S.ContentDescriptionTitleSkeleton />
          <S.ContentDescriptionImgSkeleton />
        </S.ContentDescription>

        <S.TrainingBlock>
          <S.TrainingBlockSkeleton />
          <S.TrainingBlockSkeleton />
          <S.TrainingBlockSkeleton />
          <S.TrainingBlockSkeleton />
          <S.TrainingBlockSkeleton />
        </S.TrainingBlock>

        <S.ContentFooter>
          <S.ContentFooterButtonSkeleton />
        </S.ContentFooter>
      </S.Container>
    </S.Wrapper>
  );
};