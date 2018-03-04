// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using System;
using System.Runtime.Serialization;

namespace System.Resources
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.None)]
    [Serializable]
    // TODO: NotSupported
    //[System.Runtime.CompilerServices.TypeForwardedFrom("mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")]
    public class MissingManifestResourceException : SystemException
    {
        public MissingManifestResourceException()
            : base("Unable to find manifest resource.")
            //: base(SR.Arg_MissingManifestResourceException)
        {
            HResult = System.HResults.COR_E_MISSINGMANIFESTRESOURCE;
        }

        public MissingManifestResourceException(string message)
            : base(message)
        {
            HResult = System.HResults.COR_E_MISSINGMANIFESTRESOURCE;
        }

        public MissingManifestResourceException(string message, Exception inner)
            : base(message, inner)
        {
            HResult = System.HResults.COR_E_MISSINGMANIFESTRESOURCE;
        }

        // TODO: NotSupported
        //protected MissingManifestResourceException(SerializationInfo info, StreamingContext context)
        //    : base(info, context)
        //{
        //}
    }
}
