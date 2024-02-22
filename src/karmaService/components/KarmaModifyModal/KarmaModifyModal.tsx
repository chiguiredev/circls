import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent } from 'react';
import { modifyUserKarmaPoints } from '@/karmaService/apiCalls';

type KarmaModifyModalProps = {
  email: string;
};

export const KarmaModifyModal = (props: KarmaModifyModalProps) => {

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const karmaPoints = formData.get('karmaPoints');
    const email = props.email;

    try {
      const response = await modifyUserKarmaPoints(email, Number(karmaPoints));

      if (response.ok) {
        location.reload();
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="text-blue-500 hover:text-blue-800"
        >
          Edit points
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 max-w-sm max-h-[85vh] w-[90vw] p-6 bg-white
          rounded-lg shadow-xl transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="karmaPoints" className="text-lg font-medium text-gray-700">
                Karma Points
              </label>
              <input
                type="number"
                id="karmaPoints"
                name="karmaPoints"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700
                focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Enter new amount of karma points"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
          <Dialog.Close asChild>
            <button
              className="absolute top-2.5 right-2.5 inline-flex items-center justify-center
              text-violet-700 rounded-full h-6 w-6 focus:outline-none focus:ring-2
              focus:ring-violet-600 hover:bg-violet-200"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
