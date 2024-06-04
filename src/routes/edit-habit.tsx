import { Layout } from '../components/layout';
import { MdAdd, MdDeleteForever } from 'react-icons/md';
import { Link, Form, redirect, useLoaderData } from 'react-router-dom';
import { editHabit, getHabit } from '../habits';
import { Habit } from '../types/habit-type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function loader({ params }: { params: any }): Promise<{
  habit: Habit | null;
}> {
  const habit = await getHabit(params.habitId);
  return { habit };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function action({ request, params }: { request: Request; params: any }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const {
    name,
    category,
    variantName,
    goldVariant,
    silverVariant,
    bronzeVariant,
  } = data;

  const payload: Habit = {
    name: name as string,
    category: category as string,
    variants: [
      {
        name: variantName as string,
        levels: [
          {
            level: 'gold',
            name: goldVariant as string,
          },
          {
            level: 'silver',
            name: silverVariant as string,
          },
          {
            level: 'bronze',
            name: bronzeVariant as string,
          },
        ],
      },
    ],
  };

  await editHabit(params.habitId, payload);
  return redirect('/');
}

export const EditHabit = () => {
  const { habit } = useLoaderData() as { habit: Habit };

  return (
    <Layout>
      <h2 className='font-bold text-xl mt-4'>Edit habit</h2>
      <Form method='post' id='edit-habit-form'>
        <div className='form-control w-full mt-2'>
          <div className='label'>
            <span className='label-text'>Name:</span>
          </div>
          <input
            defaultValue={habit?.name}
            name='name'
            type='text'
            placeholder='Exercise'
            className='input input-bordered w-full'
          />
        </div>
        <div className='form-control w-full mt-2'>
          <div className='label'>
            <span className='label-text'>Category:</span>
          </div>
          <select
            defaultValue={habit?.category}
            name='category'
            className='select select-bordered'
          >
            <option value='body'>Body</option>
            <option value='mind'>Mind</option>
            <option value='soul'>Soul</option>
          </select>
        </div>
        <div className='form-control w-full mt-2'>
          <div className='label'>
            <span className='label-text'>Variants:</span>
          </div>
          <div className='card bg-gray-200 dark:bg-neutral dark:text-neutral-content w-full'>
            <div className='card-body text-center p-4'>
              <div className='form-control w-full'>
                <div className='label'>
                  <span className='label-text'>Variant name:</span>
                </div>
                <input
                  defaultValue={habit?.variants[0]?.name}
                  name='variantName'
                  type='text'
                  placeholder='Jogging'
                  className='input input-bordered w-full'
                />
              </div>
              <div className='form-control w-full'>
                <div className='label'>
                  <span className='label-text'>Variant levels:</span>
                </div>
                <label className='input input-bordered flex items-center gap-2 mb-2'>
                  Gold:
                  <input
                    defaultValue={habit?.variants[0]?.levels[0]?.name}
                    name='goldVariant'
                    type='text'
                    className='grow'
                    placeholder='1km'
                  />
                </label>
                <label className='input input-bordered flex items-center gap-2 mb-2'>
                  Silver:
                  <input
                    defaultValue={habit?.variants[0]?.levels[1]?.name}
                    name='silverVariant'
                    type='text'
                    className='grow'
                    placeholder='2km'
                  />
                </label>
                <label className='input input-bordered flex items-center gap-2 mb-2'>
                  Bronze:
                  <input
                    defaultValue={habit?.variants[0]?.levels[2]?.name}
                    name='bronzeVariant'
                    type='text'
                    className='grow'
                    placeholder='5km'
                  />
                </label>
              </div>
              <div className='card-actions justify-end'>
                <button type='button' className='btn btn-square btn-sm'>
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
          <button type='button' className='btn btn-sm btn-ghost w-24 mt-2'>
            <MdAdd /> Variant
          </button>
        </div>
        <div className='mt-8 flex gap-2 justify-end'>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
          <Link to='/' className='btn btn-outline btn-error'>
            Back
          </Link>
        </div>
      </Form>
    </Layout>
  );
};

EditHabit.loader = loader;
EditHabit.action = action;
