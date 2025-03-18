'use client';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useForm, Controller} from 'react-hook-form';
import Input from '@/components/common/Input';

interface IFormInput {
  id: string;
  password: string;
}

const Signin = () => {
  const [saveId, setSaveId] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSubmit = (data: IFormInput) => {
    try {
      if (saveId) {
        localStorage.setItem('savedID', data.id);
      } else {
        localStorage.removeItem('savedID');
      }
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveID = () => {
    setSaveId(!saveId);
  };

  useEffect(() => {
    const savedID = localStorage.getItem('savedID');
    if (savedID) {
      setValue('id', savedID);
      setSaveId(true);
    }
  }, [setValue]);

  return (
    <div className="flex flex-row gap-50">
      <div className="w-[50%]">
        <div className="flex flex-row justify-between">
          <form className="mr-10 flex flex-col gap-20" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row">
              <Controller
                name="id"
                control={control}
                render={({field}) => (
                  <Input
                    label="아이디"
                    placeholder="아이디를 입력해 주세요"
                    labelClassName="my-auto w-70 text-left text-md font-bold text-gray-800"
                    className="h-35 w-full bg-gray-50 pl-10"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.id?.message}
                  />
                )}
              />
            </div>
            <div className="flex flex-row gap-10">
              <Controller
                name="password"
                control={control}
                render={({field}) => (
                  <Input
                    label="비밀번호"
                    placeholder="비밀번호를 입력해 주세요"
                    labelClassName="my-auto w-70 text-left text-md font-bold text-gray-800"
                    className="h-35 w-full bg-gray-50 pl-10"
                    type="password"
                    // isPassword={true}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.id?.message}
                  />
                )}
              />
            </div>
          </form>
          <button
            type="submit"
            className={`h-80 w-100 rounded-5 text-lg text-white ${isValid ? 'bg-sky-700' : 'bg-gray-300'}`}
            disabled={!isValid}
          >
            로그인
          </button>
        </div>
        <div className="mt-20 flex flex-row justify-center gap-10 text-md">
          <div className="flex flex-row gap-5">
            <input type="checkbox" onClick={handleSaveID} />
            <span className="text-gray-800">아이디 저장</span>
          </div>
          <span className="text-gray-300">|</span>
          <Link href="/" className="text-blue-700">
            보안 접속
          </Link>
        </div>
        <hr className="my-20 w-full border border-gray-100" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="tracking-tighter text-gray-800">아직 YBM 회원이 아니신가요?</span>
            <button type="button" className="h-30 w-100 rounded-5 bg-gray-600 text-md text-white" onClick={() => router.push('/')}>
              회원가입
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <span className="tracking-tighter text-gray-800">아이디를 잊으셧나요??</span>
            <button type="button" className="h-30 w-100 rounded-5 bg-gray-600 text-md text-white" onClick={() => router.push('/')}>
              아이디 찾기
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <span className="tracking-tighter text-gray-800">비밀번호를 잊으셧나요?</span>
            <button type="button" className="h-30 w-100 rounded-5 bg-gray-600 text-md text-white" onClick={() => router.push('/')}>
              비밀번호 찾기
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-black-50">큰 이미지</div>
    </div>
  );
};

export default Signin;
