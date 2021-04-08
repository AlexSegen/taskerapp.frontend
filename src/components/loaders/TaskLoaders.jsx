import React from 'react';

export const TaskItemLoader = () => {
    return ( 
        <div className="w-full max-w-lg p-4 mx-auto ">
            <div className="flex space-x-2 animate-pulse">
                <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                <div className="flex-1 py-1 space-y-2">
                    <div className="w-3/4 h-4 bg-blue-200 rounded"></div>
                    <div className="space-y-1">
                        <div className="h-4 bg-blue-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
     );
}