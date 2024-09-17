import React from 'react'
import Image from 'next/image'
import styles from "../components/comments/comments.module.css"
const UserComments = ({data}) => {
  return (
    <>
        {data?.map((item) => (
            <div
              className="border rounded-md p-3 ml-3 my-3 bg-gray-100 dark:bg-dark dark:text-light"
              key={item._id}
            >
              <div className={styles.user}>
                <div className="flex justify-center items-center">
                  <Image
                    src={item?.imageUser}
                    alt="useImage"
                    width={50}
                    height={50}
                    loading="lazy"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="block ml-2">
                    <span className="text-sm font-semibold block text-gray-700 dark:text-light">
                      {item?.username}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-light">
                      {item.createdAt.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-medium px-3 text-gray-800 rounded-lg dark:text-light font-poppins sm:text-sm">
                {item?.comment}
              </p>
            </div>
          )
        )}
    </>
  )
}

export default UserComments
