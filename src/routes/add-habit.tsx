import { Layout } from '../components/layout';
import { MdAdd, MdDeleteForever } from 'react-icons/md';
import { Link, Form, redirect } from 'react-router-dom';
import { Habit } from '../types/habit-type';
import { createHabit } from '../habits';

type ActionProps = {
  request: Request;
};

async function action({ request }: ActionProps) {
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
  // console.log(payload, 'iki payload');

  await createHabit(payload);
  return redirect(`/`);
}

export const AddHabit = () => {
  return (
    <Layout>
      <h2 className='font-bold text-xl mt-4'>Add new habit</h2>
      <Form method='post' id='add-habit-form'>
        <div className='form-control w-full mt-2'>
          <div className='label'>
            <span className='label-text'>Name:</span>
          </div>
          <input
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
          <select name='category' className='select select-bordered'>
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
                    name='goldVariant'
                    type='text'
                    className='grow'
                    placeholder='1km'
                  />
                </label>
                <label className='input input-bordered flex items-center gap-2 mb-2'>
                  Silver:
                  <input
                    name='silverVariant'
                    type='text'
                    className='grow'
                    placeholder='2km'
                  />
                </label>
                <label className='input input-bordered flex items-center gap-2 mb-2'>
                  Bronze:
                  <input
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
            Add
          </button>
          <Link to='/' className='btn btn-outline btn-error'>
            Back
          </Link>
        </div>
      </Form>
    </Layout>
  );
};

AddHabit.action = action;
